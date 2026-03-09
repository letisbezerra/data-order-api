require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ Connection error:', err));

// Order Schema Definition
const OrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  value: Number,
  creationDate: Date,
  items: [{
    productId: Number,
    quantity: Number,
    price: Number
  }]
});

const Order = mongoose.model('Order', OrderSchema);

// ● POST: Create a new order with data transformation (Mapping)
app.post('/order', async (req, res) => {
  try {
    const payload = req.body;

    // Data Mapping: Translating PT-BR request fields to EN database fields
    const orderData = {
      orderId: payload.numeroPedido,
      value: payload.valorTotal,
      creationDate: new Date(payload.dataCriacao),
      items: payload.items.map(item => ({
        productId: Number(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem
      }))
    };

    const newOrder = new Order(orderData);
    await newOrder.save();
    
    res.status(201).json({
      message: "Order created successfully",
      data: newOrder
    });
  } catch (error) {
    res.status(400).json({ error: "Failed to create order", details: error.message });
  }
});

// ● GET: Retrieve order by orderId
app.get('/order/:orderId', async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.orderId });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});