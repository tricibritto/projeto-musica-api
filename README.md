# 🎧 MusicHub

Sistema de cadastro e gerenciamento de músicas desenvolvido como projeto prático da disciplina de Desenvolvimento de APIs.

O projeto permite cadastrar, listar, editar e excluir músicas por meio de uma API REST integrada a uma interface web moderna e responsiva.

---

## 📌 Objetivo

Desenvolver uma aplicação completa utilizando Node.js, Express e JavaScript, aplicando conceitos de:

- API REST
- Integração Frontend e Backend
- Organização profissional de projeto
- Consumo de API com Fetch
- Manipulação de JSON
- Atualização dinâmica de conteúdo sem recarregar a página

---

## 🚀 Tecnologias Utilizadas

### Backend

- Node.js
- Express
- CORS

### Frontend

- HTML5
- CSS3
- JavaScript
- Fetch API

### Controle de Versão

- Git
- GitHub

---

## 📂 Estrutura do Projeto

```text
MUSICA-API
│
├── backend
│   ├── node_modules
│   ├── package.json
│   ├── package-lock.json
│   │
│   └── src
│       ├── controllers
│       │   └── musicController.js
│       │
│       ├── routes
│       │   └── musicRoutes.js
│       │
│       └── server.js
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── prints
│   ├── frontend.png
│   ├── postman-get.png
│   └── postman-post.png
│
├── README.md
└── .gitignore
```

---

## 🎵 Funcionalidades

- Cadastro de músicas
- Listagem de músicas cadastradas
- Edição de músicas
- Exclusão de músicas
- Atualização automática da lista
- Comunicação entre Frontend e Backend
- Retorno de dados em JSON

---

## 🔗 Rotas da API

### Listar músicas

```http
GET /api/musicas
```

### Cadastrar música

```http
POST /api/musicas
```

Exemplo de JSON:

```json
{
  "titulo": "Imagine",
  "artista": "John Lennon"
}
```

### Atualizar música

```http
PUT /api/musicas/:id
```

Exemplo:

```json
{
  "titulo": "Bohemian Rhapsody",
  "artista": "Queen"
}
```

### Excluir música

```http
DELETE /api/musicas/:id
```

---

## ▶️ Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/tricibritto/projeto-musica-api.git
```

### 2. Entrar na pasta backend

```bash
cd backend
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o servidor

```bash
node src/server.js
```

Servidor disponível em:

```text
http://localhost:3000
```

### 5. Executar o Frontend

Abra o arquivo:

```text
frontend/index.html
```

em seu navegador.

---

## 📸 Prints da Aplicação

### Interface do Sistema

![Frontend](prints/frontend.png)

### Requisição GET no Postman

![GET](prints/postman-get.png)

### Requisição POST no Postman

![POST](prints/postman-post.png)

---

## 👥 Integrantes

- Trícia de Britto Matos


---

## 📚 Projeto Acadêmico

Projeto desenvolvido para a disciplina de Desenvolvimento de APIs, com foco na construção de uma aplicação web utilizando arquitetura REST, integração entre frontend e backend e boas práticas de organização de código.