require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const orderController = require('./controllers/orderController');

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ Connection error:', err));

// --- Swagger Documentation Completo ---
const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Data Order API",
    description: "API for managing orders with data transformation (Jitterbit Challenge)",
    version: "1.0.0"
  },
  servers: [{ url: "http://localhost:3000" }],
  paths: {
    "/order": {
      post: {
        summary: "Create a new order",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  numeroPedido: { type: "string", example: "v10089015vdb-01" },
                  valorTotal: { type: "number", example: 10000 },
                  dataCriacao: { type: "string", example: "2023-07-19T12:24:11" },
                  items: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        idItem: { type: "string", example: "2434" },
                        quantidadeItem: { type: "number", example: 1 },
                        valorItem: { type: "number", example: 1000 }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        responses: { 201: { description: "Created" } }
      }
    },
    "/order/list": {
      get: {
        summary: "List all orders",
        responses: { 200: { description: "Success" } }
      }
    },
    "/order/{orderId}": {
      get: {
        summary: "Get order by ID",
        parameters: [{ name: "orderId", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "Success" } }
      },
      put: {
        summary: "Update an order",
        parameters: [{ name: "orderId", in: "path", required: true, schema: { type: "string" } }],
        requestBody: {
          content: { "application/json": { schema: { type: "object" } } }
        },
        responses: { 200: { description: "Updated" } }
      },
      delete: {
        summary: "Delete an order",
        parameters: [{ name: "orderId", in: "path", required: true, schema: { type: "string" } }],
        responses: { 200: { description: "Deleted" } }
      }
    }
  }
};

// Swagger Route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API Routes
app.get('/order/list', orderController.listOrders);
app.post('/order', orderController.createOrder);
app.get('/order/:orderId', orderController.getOrderById);
app.put('/order/:orderId', orderController.updateOrder);
app.delete('/order/:orderId', orderController.deleteOrder);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📖 Documentation available at http://localhost:3000/api-docs`);
});