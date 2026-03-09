# 📦 Data Order API - Jitterbit Challenge

This API was developed as part of a technical challenge for the Junior Systems Analyst position.  
It handles order management with a specialized data transformation layer that maps Portuguese request fields to an English database schema.

---

## 🚀 Features
- 🔄 **Data Transformation**: Seamlessly maps PT-BR request fields to EN database schema.
- 📝 **Full CRUD**: Implements Create, Read, List, Update, and Delete operations.
- ☁️ **Database**: Fully integrated with MongoDB Atlas for cloud persistence.
- 📖 **Documentation**: Interactive API documentation via Swagger UI.

---

## 🛠 Tech Stack
- **Runtime**: Node.js  
- **Framework**: Express.js  
- **Database**: MongoDB Atlas with Mongoose ODM  
- **Documentation**: Swagger UI Express  
- **Environment**: Dotenv  

---

## 📂 Project Structure
```text
data-order-api/
├── src/
│   ├── controllers/   # Route logic and CRUD operations
│   ├── models/        # Mongoose schemas (Order and Item)
│   ├── utils/         # Data transformation (Mapper)
│   └── server.js      # Main entry point & Swagger config
├── .env               # Environment variables (Not included in repo)
└── README.md
```

---

## ⚙️ How to Run

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd data-order-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment
Create a .env file in the root directory and add your connection string:

```bash
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/DataOrderDB
PORT=3000
```

### 4. Run the application
```bash
npm run dev
```

### 5. Access Documentation
Open your browser and go to: http://localhost:3000/api-docs

🧪 Testing with cURL
You can test the data transformation by sending a request in Portuguese:

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

## 📄 Example MongoDB Document
Below is an example of how an order is stored in MongoDB:

```bash
{
  "_id" : ObjectId("64dab8a0f6b7183237d307f6"),
  "orderId" : "vl0089016vdb-01",
  "value" : 10000,
  "creationDate" : ISODate("2023-07-19T12:24:11.529Z"),
  "items" : [
    {
      "productId" : 2434,
      "quantity" : 1,
      "price" : 1000,
      "_id" : ObjectId("64daba7d05bcc674899dc5bf")
    }
  ],
  "__v" : 0
```
