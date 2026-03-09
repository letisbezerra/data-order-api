# Data Order API 📦

API desenvolvida para o desafio técnico de gerenciamento e transformação de pedidos.

## 🚀 Tecnologias
- Node.js
- Express
- MongoDB Atlas (Mongoose)

## 🛠️ Como rodar o projeto
1. Clone o repositório.
2. Execute `npm install`.
3. Crie um arquivo `.env` com sua `MONGO_URI`.
4. Execute `node index.js`.

## 📌 Endpoints
- **POST `/order`**: Cria um pedido transformando os campos de PT para EN.
- **GET `/order/:orderId`**: Busca um pedido pelo ID.
