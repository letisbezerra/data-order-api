const Order = require('../models/Order');
const { mapRequestToDb } = require('../utils/mapper');

// Create a new order 
exports.createOrder = async (req, res) => {
  try {
    const transformedData = mapRequestToDb(req.body);
    const newOrder = new Order(transformedData);
    await newOrder.save();
    res.status(201).json({ message: "Order created successfully", data: newOrder });
  } catch (error) {
    res.status(400).json({ error: "Failed to create order", details: error.message });
  }
};

// Get order by orderId 
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.orderId });
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// List all orders 
exports.listOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to list orders" });
  }
};

// Update order 
exports.updateOrder = async (req, res) => {
  try {
    const transformedData = mapRequestToDb(req.body);
    const order = await Order.findOneAndUpdate(
      { orderId: req.params.orderId },
      transformedData,
      { new: true }
    );
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order updated successfully", data: order });
  } catch (error) {
    res.status(400).json({ error: "Update failed", details: error.message });
  }
};

// Delete order 
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findOneAndDelete({ orderId: req.params.orderId });
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Delete failed" });
  }
};