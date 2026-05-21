# Política de Privacidade

**Aplicativo:** Get My Code  
**Última atualização:** Maio de 2026  

> **Resumo (TL;DR):** O **Get My Code** é um aplicativo estritamente local e *offline*. Nós não coletamos, não armazenamos em servidores e não compartilhamos nenhum dado seu. Suas senhas e credenciais nunca saem do seu dispositivo físico.

## 1. Introdução
A presente Política de Privacidade descreve como o aplicativo **Get My Code** lida com as suas informações. Construímos este aplicativo sob a filosofia de *Zero-Knowledge* (Conhecimento Zero), o que significa que nem os desenvolvedores, nem terceiros possuem qualquer meio técnico para acessar as informações que você insere no aplicativo.

## 2. Coleta e Uso de Dados
O **Get My Code** não coleta nenhuma Informação Pessoal Identificável (PII), logs de uso, métricas de comportamento ou dados de telemetria. Todo o funcionamento do aplicativo ocorre de maneira isolada no seu dispositivo móvel.
* **Credenciais e Senhas:** Os dados que você cadastra são armazenados exclusivamente na memória flash do seu celular.
* **PIN Mestre:** O PIN utilizado para acessar o aplicativo é convertido em um Hash irreversível e salvo no chip de segurança do seu aparelho (Keystore/Keychain).

## 3. Armazenamento Local e Criptografia
A segurança dos seus dados é garantida pelo próprio hardware do seu celular. Utilizamos criptografia de nível militar (AES-256) nativa. Como não mantemos cópias dos seus dados em nuvem, **a perda do seu PIN ou a formatação do seu aparelho resultará na perda irreversível das senhas salvas**. Não possuímos um mecanismo de "Esqueci minha senha" por design, para garantir que ninguém consiga burlar o seu cofre.

## 4. Permissões do Dispositivo
Para o funcionamento correto das ferramentas de segurança, o aplicativo poderá solicitar ou utilizar nativamente as seguintes permissões do sistema operacional:
* **Biometria (FaceID/TouchID):** Utilizada localmente para desbloquear o aplicativo de forma ágil, substituindo a digitação do PIN. O aplicativo não tem acesso aos dados biométricos, recebendo apenas uma confirmação de "Sucesso" ou "Falha" do sistema operacional.
* **Área de Transferência (Clipboard):** O aplicativo grava temporariamente a senha na área de transferência quando você clica em "Copiar". O aplicativo apaga essa informação automaticamente após alguns segundos para proteger você contra malwares de interceptação.

## 5. Compartilhamento com Terceiros
Como não possuímos acesso aos seus dados, é técnica e logicamente impossível que o **Get My Code** venda, alugue ou compartilhe qualquer informação sua com terceiros, anunciantes ou governos.

## 6. Serviços de Rastreamento e Analytics
O aplicativo não possui integração com SDKs de rastreamento (como Google Analytics, Firebase Analytics, Crashlytics, etc.). Não monitoramos a forma como você utiliza o aplicativo.

## 7. Exclusão de Dados
Você tem controle total sobre os seus dados. Para excluir permanentemente todas as suas informações e senhas do **Get My Code**, basta desinstalar o aplicativo do seu dispositivo ou limpar os dados do aplicativo através das configurações do seu sistema operacional Android ou iOS.

## 8. Alterações a esta Política
Podemos atualizar esta Política de Privacidade de tempos em tempos para refletir mudanças tecnológicas ou requisitos legais. Como o aplicativo não possui comunicação com servidores, as atualizações desta política serão refletidas nas atualizações do aplicativo nas lojas (App Store e Google Play).

## 9. Contato
Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre as práticas de segurança do aplicativo, entre em contato através do e-mail oficial do desenvolvedor: machadoalluisio@gmail.com.