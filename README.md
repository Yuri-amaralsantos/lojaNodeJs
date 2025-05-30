# 📦 API de Registro de Produtos

Uma API simples construída com **Node.js, Express, TypeScript, Prisma e JWT**, que permite registro de usuários, autenticação e gerenciamento de produtos.

---

## 🔧 Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Prisma (ORM)
- PostgreSQL (ou outro banco compatível)
- JSON Web Token (JWT)
- Swagger (para documentação da API)

---

## 🚀 Instalação

git clone https://github.com/seu-usuario/sua-api.git
cd sua-api
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
Certifique-se de configurar corretamente o arquivo .env com a URL do seu banco de dados e a chave secreta do JWT.

## 🔐 Autenticação
Utilize o endpoint /api/login para obter um token JWT. As rotas protegidas exigem o envio do token no header:

Authorization: Bearer <seu_token>
📌 Endpoints
### ▶️ POST /api/register
Registra um novo usuário.

Corpo da requisição:
{
  "username": "joao",
  "password": "123456"
}

### ▶️ POST /api/login
Faz login e retorna um token JWT.

Corpo da requisição:
{
  "username": "joao",
  "password": "123456"
}

Resposta:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}

## 🆕 POST /api/products (autenticado)
Cria um novo produto.

Headers:
Authorization: Bearer <token>
Corpo da requisição:
{
  "name": "Notebook",
  "price": 3500
}

## 📄 GET /api/products
Lista todos os produtos cadastrados.

❌ DELETE /api/products/:id (autenticado)
Deleta um produto específico.

Headers:
Authorization: Bearer <token>

## 📚 Documentação Swagger
Acesse http://localhost:3000/api-docs para visualizar a documentação completa via Swagger UI.

## 📄 Licença
Este projeto está licenciado sob a licença MIT.

