const mongoose = require('mongoose');

// Schema for individual items within an order
const itemSchema = new mongoose.Schema({
  productId: Number,
  quantity: Number,
  price: Number
});

// Main Order Schema
const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  value: Number,
  creationDate: { type: Date, required: true },
  items: [itemSchema]
}, { 
  versionKey: false // Removes the __v field from database responses
});

module.exports = mongoose.model('Order', orderSchema);