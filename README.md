# Tijuca Mobile

> O aplicativo de vendas é uma extensão do módulo de vendas do ERP. O objetivo é ser um mecanismo de apoio integral ao vendedor externo da empresa.

Este documento é destinado aos desenvolvedores, portanto veremos como são as configurações inicias para poder desenvolver no aplicativo Tijuca Mobile.

## Primeiros passos

O aplicativo foi desenvolvido usando a biblioteca **React Native**, é muito importante que você tenha pelo menos uma noção de como desenvolver usando essa biblioteca, conheça o ecossistema react e tenha habilidades avançadas em Javascript.

### Principais tecnologias utilizadas

- React Native
- Node js
- Styled Components

Além dessas existem várias outras, porém as tecnologias aqui listadas são a base da aplicação.

### Ambiente de desenvolvimento

Antes de tudo, é necessário ter todo o ambiente para desenvolvimento android(Java, Sdk) devidamente instalado e configurado na sua máquina, além do Node js.

Para ajudar na preparação desse ambiente existe um [**tutorial**](https://github.com/Rocketseat/ambiente-react-native) feito pela a equipe da rocketseat bem fácil que ensina passo a passo como instalar e configurar esse ambiente.

Feitos todos esses procedimentos, já podemos baixar a aplicação.

## Baixando e rodando a aplicação

> Obs: Para baixar o projeto é necessário ter o **Git** e o **GitFlow** instalado e devidamente configurado.

Para baixar o projeto, digite no seu terminal:

```bash
git clone ssh://root@192.168.10.8/var/www/erpMobile.git
```

Depois de inserir a senha o diretório será baixado. Entre no diretório e inicialize o git flow:

```bash
git flow init [pressione enter]
```

Feito isso, já será possível ver e acessar os arquivos da aplicação.

### Style Guide

Para organizar e padronizar o código da aplicação adotamos usar o padrão da **Airbn**, **ESLint** para ser o linter e o **Prettier** para formatar o código.

Para nos ajudar a configurar o style guide no vscode, acesse esse [**tutorial**](https://drive.google.com/open?id=15VZQ7sAP4eqlpCVr_eXIpqGPJMKk9_bV).

### Executando a aplicação

Primeiramente, é necessário baixarmos todas as dependências da aplicação. Para isso, no diretório do app execute o comando no terminal:

> Obs: Como gerenciador de dependências do node, escolhemos usar o **Yarn**. Apesar de não ter problemas em usar o npm no projeto, para seguir o padrão por favor [instale](https://yarnpkg.com/lang/en/docs/install/#debian-stable) e use o yarn.

Usando o yarn:

```bash
yarn install
```

Usando o npm:

```bash
npm install
```

Logo após, o projeto estará pronto para ser executado em um emulador ou dispositivo. No diretório do projeto, execute o comando:

```bash
react-native run-android
```

Com isso, todo o ambiente de desenvolvimento estará pronto.
