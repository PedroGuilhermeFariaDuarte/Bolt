# Bolt
Neste repositório você vai encontrar a implementação de uma interface do case Bolt E-commerce.

## Getting Started
Para começar a utiliza a interface, vamos ao pré-requisitos e a sua instalação.

### Pre-requisites

1.  Instalando o Yarn
 > Para instalar o yarn, você possui duas maneiras.
 
 1ª Acessar o site oficial e baixar a versão para o seu S.O.
 2ª Caso esteja no  windows, instalar via Chocolatey é uma otima opção.

Via Chocolatey, acesse o site oficial e siga todas os passos informados, após a instalação digite o seguinte comando:
```
choco install yarn
```

feito isso, no mesmo terminal, execute o seguinte comando: 
```
yarn -v
```
Você verá algo semelhante a isto:
> 1.17.3

A versão 1.17.3 pode variar com o tempo e com a versão que você baixou.

2.  Instalando o Expo
 > Para instalar o Expo, você possui apenas uma maneira.
 
 1ª Via chocolatey, instale o NPM.
```
choco install npm
```
Após a instalação do NPM, no mesmo terminal digite o seguinte comando:
```
npm install expo-cli --global
```
Feito isso, aguarde a finalização da instalação e  digite o seguinte comando: 
```
 expo -V
```
Caso tudo de certo você poderá ver algo semelhante a isto:
> 3.11.7

Lembrando que a versão 3.11.7, pode variar com o tempo e com versão da sua instalação 

Se o seu terminal apresentar um erro como 'comando desconhecido' ou algo semelhante, você precisará configurar algumas permissões do seu terminal. Para isso, no mesmo terminal, digite o seguinte comando:
```
Set-ExecutionPolicy Bypass -Scope Process -Force
```
Execute o comando, caso apareça a seguinte mensagem: 

> Alteração da Política de Execução
A política de execução ajuda a proteger contra scripts não confiáveis. A alteração da
política de execução pode implicar exposição aos riscos de segurança descritos no tópico da
ajuda about_Execution_Policies em https://go.microsoft.com/fwlink/?LinkID=135170. Deseja
alterar a política de execução?
[S] Sim  [A] Sim para Todos  [N] Não  [T] Não para Todos  [U] Suspender  [?] Ajuda
(o padrão é "N"):

Digite S, e pressione a teclar enter.

Em seguida digite este comando:
```
Unblock-File -Path C:\Users\SEU_NOME_DE_USUARIO_NO_COMPUTADOR\AppData\Roaming\npm\expo.ps1
```
Agora, novamente repita o seguinte processo:
```
 expo -V
```
Caso tudo de certo você poderar ver algo semelhante a isto:
> 3.11.7
  
A versão 3.11.7, pode variar com o tempo e com versão da sua instalação

Para finalizar a instalação do pré-requisito Expo, você precisa ir até a Google Play (https://play.google.com/store/apps/details?id=host.exp.exponent) e instalar o Expo Client no seu celular.

#### instalando o Android Debug Bridge (adb)

Abra um terminal como adminstrador e execute o seguinte comando:

```
choco install adb
```

#### Ative a depuração do adb no seu dispositivo

> Para usar o adb com um dispositivo conectado via USB, você precisa ativar a opção Depuração USB nas configurações do sistema do dispositivo, em Opções do desenvolvedor.

> No Android 4.2 e versões posteriores, a tela "Opções do desenvolvedor" normalmente fica oculta por padrão. Para exibi-la, acesse Config. > Sobre o dispositivo e toque em Número da versão sete vezes. Retorne à tela anterior para encontrar as Opções do desenvolvedor na parte inferior.

##### Em alguns dispositivos, a tela "Opções do desenvolvedor" pode ter uma localização ou um nome diferente.

> Agora você pode conectar seu dispositivo a uma porta USB. Verifique se o dispositivo está conectado executando adb devices no terminal de sua preferência. 

> Se eles estiverem conectados, o nome do dispositivo estará listado como “device”.

> Observação: ao conectar um dispositivo com Android 4.2.2 ou versões posteriores, o sistema mostrará uma caixa de diálogo perguntando se o usuário quer aceitar uma Chave RSA que permite a depuração por meio do computador. Esse mecanismo de segurança protege dispositivos de usuários, porque garante que a depuração USB e outros comandos do adb não sejam executados, a não ser que o você consiga desbloquear o dispositivo e confirmar a caixa de diálogo.

### Installing and Running

Com os pré-requisitos instalados, agora você precisa baixar este repositório.

Com o dowloand do repositório concluído, descompacte (caso tenha baixado em formato zip) e abra a pasta Bolt no terminal de sua escolha. Feito isso execute os seguintes comandos:

#### Bolt
Após a instalação do pré-requisito Expo, agora abra a pasta mobile no seu terminal em que você instalou e configurou o Expo, e execute o seguinte comando:

```
expo install
```
Aguarde a instalação, pode demorar um pouco.

Agora no mesmo terminal que você efetuou a instalação, execute o seguinte comando:
``` 
yarn start
```

Durante a inicialização, uma nova guia/janela do seu navegador padrão irar abrir, com o fim da inicialização, no terminal, você irar ver um QR CODE, isso significa que tudo deu certo.

Com o seu celular que você instalou o Expo Client (informado na seção de pré-requisitos), abra o aplicativo, agora vá até a guia/janela que foi aberta em seu navegador, e clique na opção 'tunnel' logo acima do QR CODE.

Feito isso, no aplicativo Expo Client, clique na opção 'Scan QR Code' e escaneia o QR CODE localizado logo abaixo de tunnel.

Aguarde o building da aplicação, instalação e a sua inicialização.
