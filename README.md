# 🔐 Get my Code - Gerenciador de Senhas Offline

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-433E38?style=for-the-badge&logo=react&logoColor=white)

Um aplicativo mobile **offline-first** focado em privacidade extrema e segurança local para gerenciamento de credenciais. Construído com a filosofia de **Zero-Knowledge**, o aplicativo garante que o controle das senhas e chaves criptográficas pertença única e exclusivamente ao dispositivo físico do usuário.

## 🛡️ Filosofia de Segurança (Zero-Knowledge)
Este aplicativo **não possui integração com nuvem, servidores externos ou mecanismos de recuperação de senha**. 
A segurança é garantida por um sistema de hardware estrito:
* **Master Key (256-bits):** Gerada localmente e presa ao hardware do dispositivo via Keystore/Keychain.
* **Criptografia AES nativa:** Todo o banco de dados é criptografado nativamente via C++.
* **Irrecuperável por Design:** O esquecimento do PIN mestre resulta na perda total dos dados, mitigando qualquer risco de invasão por força bruta ou engenharia reversa.

---

## ✨ Features Principais

### 🗄️ Cofre de Senhas (CRUD)
* Armazenamento local criptografado de credenciais (Serviço, Usuário e Senha).
* Visualização mascarada por padrão para evitar olhares curiosos.
* Cópia ágil (1-click) para a área de transferência.

### 🎲 Gerador de Senhas Customizável
* Controles granulares: Comprimento, Maiúsculas, Minúsculas, Números e Símbolos.
* *Templates* rápidos integrados (ex: "PIN de Banco - 6 Dígitos", "Máxima Segurança").
* Prevenção de entropia nula (impede geração de senhas sem caracteres válidos).

### 🔒 Engenharia Anti-Intrusão
* **Time-To-Live no Clipboard:** Limpeza automática da área de transferência após 45 segundos da cópia.
* **Bloqueio de App Switcher:** Tela opaca e bloqueio de capturas de tela (screenshots) nativos ao alternar entre aplicativos.
* **Rate Limiting:** Bloqueio temporário (60s) após 5 tentativas de PIN incorretas para prevenir força bruta.
* **Auto-Lock:** Purga imediata da memória RAM e bloqueio da sessão caso o app vá para segundo plano ou fique inativo por 3 minutos.

---

## 🛠️ Stack Tecnológica

O projeto foi construído utilizando as melhores e mais performáticas ferramentas do ecossistema React Native moderno:

* **Framework:** [Expo](https://expo.dev/) (React Native)
* **Roteamento:** [Expo Router](https://docs.expo.dev/router/introduction/) (Route Groups para isolamento de fluxos protegidos)
* **Banco de Dados:** [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) (Acesso síncrono ultra-rápido com criptografia ativada)
* **Hardware Security:** `expo-secure-store` e `expo-crypto`
* **Gerenciamento de Estado:** [Zustand](https://github.com/pmndrs/zustand)
* **Validação de Dados:** `react-hook-form` + [Zod](https://zod.dev/)

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
* Node.js (v18+)
* Yarn, npm ou pnpm
* Aplicativo *Expo Go* no seu celular físico ou um Emulador configurado.

### Passos
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Alluisio/get-my-code.git
   cd get-my-code
   ```

2. **Instale as dependências:**
   ```bash
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npx expo start
   ```

4. **Abra o aplicativo:**
   * Escaneie o QR Code gerado no terminal usando o aplicativo da câmera (iOS) ou o Expo Go (Android).

---

## 📂 Estrutura de Rotas (Expo Router)

A arquitetura de rotas foi desenhada para isolar completamente a área não-autenticada do cofre:

```text
app/
├── (auth)/                # Grupo Público (Barreira de Proteção)
│   ├── pin-setup.tsx      # Geração de chaves e configuração de PIN
│   └── unlock.tsx         # Autenticação (Desbloqueio de Sessão)
└── (app)/                 # Grupo Privado (Acesso restrito via Estado Global)
    ├── _layout.tsx        # Validador de Sessão Ativa
    ├── vault.tsx          # Listagem do cofre e interações rápidas
    └── create.tsx         # Formulário e Gerador de Senhas
```

---

## 🤝 Contribuição

Este é um projeto com foco em estudos arquiteturais e segurança no ecossistema mobile. Sinta-se à vontade para abrir *Issues* relatando bugs ou *Pull Requests* sugerindo melhorias no código.

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeatureIncrivel`)
3. Faça o commit das suas alterações (`git commit -m 'feat: Adicionando uma nova feature incrivel'`)
4. Faça o push para a branch (`git push origin feature/MinhaFeatureIncrivel`)
5. Abra um Pull Request

## 📝 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
