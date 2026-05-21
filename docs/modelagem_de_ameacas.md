# Modelagem de Ameaças (Threat Model) - Get My Code

## 1. Escopo e Objetivos
Este documento descreve as potenciais ameaças à segurança do aplicativo Get My Code, categorizando vetores de ataque, avaliando o impacto e definindo as contramedidas técnicas adotadas na arquitetura. O sistema adota a filosofia **Zero-Knowledge** e **Offline-First**, o que desloca o perímetro de segurança de servidores em nuvem exclusivamente para o hardware do dispositivo móvel.

## 2. Ativos de Segurança (Assets)
* **A1 - Cofre de Senhas (Dados em Repouso):** A base de dados do usuário (MMKV) contendo as credenciais em texto claro.
* **A2 - Master Key (Chave Criptográfica):** A chave simétrica de 256-bits gerada aleatoriamente que decripta o MMKV.
* **A3 - PIN do Usuário:** A senha de acesso diário escolhida pelo usuário.
* **A4 - Dados em Trânsito Local (Clipboard/Memória):** As senhas temporariamente expostas na RAM durante o uso ou na área de transferência.

---

## 3. Análise de Vetores de Ataque

### 🔴 Ameaça 1: Extração Física de Dados (Dispositivo Comprometido) - Nível: CRÍTICO
* **Descrição:** Um atacante obtém acesso físico ao dispositivo com privilégios de *Root* (Android) ou *Jailbreak* (iOS), permitindo a leitura irrestrita do sistema de arquivos (File System) para copiar o arquivo `.mmkv`.
* **Alvo:** A1, A2.
* **Mitigação Arquitetural:** 
  * O arquivo do MMKV é criptografado nativamente em C++ via AES-256.
  * A chave de criptografia (Master Key) não reside no sistema de arquivos comum, mas no módulo de segurança de hardware (Keystore/Keychain) gerenciado pelo `expo-secure-store`.
  * A flag `WHEN_UNLOCKED_THIS_DEVICE_ONLY` impede que a chave seja migrada para outros dispositivos via backup clonado, inutilizando o banco extraído.

### 🟡 Ameaça 2: Shoulder Surfing e Empréstimo do Dispositivo - Nível: MÉDIO
* **Descrição:** Pessoas mal-intencionadas ou bisbilhoteiras ao redor do usuário visualizando a tela enquanto o app está aberto, ou o usuário empresta o celular temporariamente destravado.
* **Alvo:** A1.
* **Mitigação Arquitetural:**
  * Todas as senhas são mascaradas visualmente (`••••••••`) por padrão na listagem (UI).
  * **Auto-Lock:** O aplicativo purga a memória global (Zustand) e exige o PIN instantaneamente caso o app vá para segundo plano (background).
  * **Timeout por inatividade:** Se a tela permanecer ligada sem interação por 3 minutos, a sessão é encerrada nativamente.

### 🔴 Ameaça 3: Interceptação do Clipboard (Malware Sniffing) - Nível: ALTO
* **Descrição:** Um aplicativo malicioso instalado no mesmo dispositivo monitora passivamente a Área de Transferência (Clipboard) do sistema operacional, capturando as senhas quando o usuário clica em "Copiar".
* **Alvo:** A4.
* **Mitigação Arquitetural:**
  * **Time-To-Live (TTL) do Clipboard:** Implementação via `expo-clipboard`. Ao copiar uma credencial, um temporizador é iniciado. Após 45 segundos, a área de transferência é sobrescrita com uma string vazia.

### 🟡 Ameaça 4: Ataque de Força Bruta Local no PIN - Nível: MÉDIO
* **Descrição:** Um atacante com o celular do usuário tenta adivinhar o PIN de 6 dígitos exaustivamente na tela `/unlock`.
* **Alvo:** A3.
* **Mitigação Arquitetural:**
  * **Rate Limiting:** Bloqueio temporário da interface após 5 tentativas falhas consecutivas (cooldown de 60 segundos com incremento progressivo).
  * **Criptografia do PIN:** O PIN não é salvo em texto plano para comparação, mas submetido a um Hash SHA-256 com um Salt estático, impedindo engenharia reversa do PIN caso o armazenamento seguro seja violado.

### 🟡 Ameaça 5: Espionagem de Tela e Multitarefa - Nível: MÉDIO
* **Descrição:** Vazamento de informações sigilosas através do App Switcher (gerenciador de tarefas) do sistema operacional, que tira screenshots automáticos, ou por apps de gravação de tela maliciosos.
* **Alvo:** A4.
* **Mitigação Arquitetural:**
  * Uso da flag de sistema `FLAG_SECURE` (Android) via `expo-screen-capture`, que instrui o S.O. a bloquear gravações de tela (Screen Recording) e screenshots.
  * Substituição da interface por uma tela preta/opaca no momento em que o aplicativo entra no modo multitarefa.

---

## 4. Riscos Aceitos (Out-of-Scope)
Nenhuma arquitetura garante segurança 100%. Os seguintes cenários são reconhecidos como riscos aceitos pelo modelo de negócio (Zero-Knowledge):
* **Amnésia do Usuário:** O esquecimento do PIN mestre resulta na perda total dos dados. Não há mitigação para isso.
* **Keyloggers Ocultos no S.O.:** Se o dispositivo estiver infectado com um teclado customizado malicioso no nível do sistema operacional, o PIN do usuário pode ser capturado durante a digitação no primeiro acesso.
* **Perda/Dano do Hardware Original:** Como não há backup em nuvem por padrão nesta versão, a perda do celular ou quebra do armazenamento flash destruirá o banco de dados irreparavelmente.