const Order = require('../models/Order');
const { mapRequestToDb } = require('../utils/mapper');

// Controller to handle order creation
exports.createOrder = async (req, res) => {
  try {
    const transformedData = mapRequestToDb(req.body);
    const newOrder = new Order(transformedData);
    await newOrder.save();
    
    res.status(201).json({
      message: "Order created successfully",
      data: newOrder
    });
  } catch (error) {
    res.status(400).json({ 
      error: "Failed to create order", 
      details: error.message 
    });
  }
};

// Controller to handle order retrieval by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.orderId });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};