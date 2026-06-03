# 🎵 MusicHub

Sistema de cadastro de músicas desenvolvido para a disciplina de Desenvolvimento de APIs.

## 📌 Objetivo

Permitir o cadastro e a listagem de músicas favoritas por meio de uma API REST integrada a uma interface web.

## 🚀 Tecnologias Utilizadas

### Backend

* Node.js
* Express
* CORS

### Frontend

* HTML5
* CSS3
* JavaScript
* Fetch API

## 📂 Estrutura do Projeto

```text
MUSICA-API
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   └── server.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

## ⚙️ Funcionalidades

* Cadastro de músicas
* Listagem de músicas cadastradas
* API REST
* Requisição GET
* Requisição POST
* Atualização automática da lista sem recarregar a página

## 🔗 Rotas da API

### Buscar músicas

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

## ▶️ Como Executar

### Instalar dependências

```bash
cd backend
npm install
```

### Iniciar o servidor

```bash
node src/server.js
```

Servidor disponível em:

```text
http://localhost:3000
```

## 👥 Integrantes

* Trícia Britto 
