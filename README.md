# Data Order API - Jitterbit Challenge

This API was developed as part of a technical challenge. It handles order management with a specific data transformation layer from Portuguese to English fields.

## 🚀 Features
- **Data Transformation:** Maps PT-BR request fields to EN database schema.
- **Full CRUD:** Create, Read, List, Update, and Delete operations.
- **Database:** Integration with MongoDB Atlas.
- **Documentation:** Built-in Swagger UI.

## 🛠 Tech Stack
- Node.js / Express
- Mongoose (MongoDB ODM)
- Swagger UI Express
- Dotenv

## ⚙️ How to run
1. Clone the repository.
2. Run `npm install`.
3. Create a `.env` file with your `MONGO_URI`.
4. Run `npm run dev`.
5. Access the documentation at: `http://localhost:3000/api-docs`

## 🧪 Testing with cURL
```bash
curl --location 'http://localhost:3000/order' \
--header 'Content-Type: application/json' \
--data '{
"numeroPedido": "v10089015vdb-01",
"valorTotal": 10000,
"dataCriacao": "2023-07-19T12:24:11",
"items": [
{
"idItem": "2434",
"quantidadeItem": 1,
"valorItem": 1000
}
]
}'
```
