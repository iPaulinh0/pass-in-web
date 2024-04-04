<h1 align="center"> NLW Unite </h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-para-rodar">Para rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="projeto DevLinks" src="./assets/Cover.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- ReactJS, Typescript, NodeJS
- Git e Github
- Figma

## 💻 Projeto

No evento NLW Unite, nosso desafio foi criar um site com uma lista de participantes de um evento.

- [Acesse o projeto finalizado, online](https://ipaulinh0.github.io/pass-in-web/)

## 🔖 Layout

Você pode visualizar o layout do projeto através [DESSE LINK](https://www.figma.com/community/file/1356738933008624188). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

## 🔧 Para rodar

### Front-End

1. Ao clonar o repositório, basta instalar as dependências:
```node
    npm i
```
2. Iniciar o servidor local:
```
    npm run dev
```    
3. Abrir a url indicada no terminal: **EX: localhost:5173**

### Back-End

É necessário fazer o clone do repositório back-end do projeto [DESSE LINK](https://github.com/rocketseat-education/nlw-unite-nodejs).

1. Ao abrir o repositório, instale todas as dependências:
    ```node
        npm i
    ```
2. Crie um arquivo de variável de ambiente **.env** com os seguintes parâmetros:
    ```
        DATABASE_URL="file:./dev.db"
    ```
3. Rodar o comando seed para preencher o banco de dados com dados fictícios:
    ```node
        npx prisma db seed
    ```
4. Por fim, basta iniciar o servidor:
    ```node
        npm run dev
    ```



## :memo: Licença

Esse projeto está sob a licença MIT.

---

Feito com ♥ by Rocketseat :wave: [Participe da nossa comunidade!](https://discord.gg/rocketseat)