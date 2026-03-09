# Data Order API 📦

This is a Node.js REST API developed for the Jitterbit technical challenge. It manages orders and performs data transformation from Portuguese request fields to English database fields.

## 🚀 Technologies
- Node.js & Express
- MongoDB Atlas (Cloud Database)
- Mongoose (Modeling)
- Dotenv (Environment Variables)

## 🛠️ Installation & Setup
1. Clone this repository.
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory with your `MONGO_URI`.
4. Run the server: `node index.js`

## 🔌 API Endpoints
- **POST `/order`**: Receives an order in PT-BR, transforms it, and saves it to MongoDB.
- **GET `/order/:orderId`**: Retrieves an order by its ID.

---
Developed by Letícia Bezerra
