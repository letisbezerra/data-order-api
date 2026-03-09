require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const orderController = require('./controllers/orderController');

const app = express();
app.use(express.json());

// MongoDB Atlas Connection
// Ensure your MONGO_URI in the .env file is correct and the password is replaced
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ Connection error:', err));

// Routes
app.post('/order', orderController.createOrder);
app.get('/order/:orderId', orderController.getOrderById);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});