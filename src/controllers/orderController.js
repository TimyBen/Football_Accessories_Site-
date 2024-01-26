const orderModel = require('../models/orderModel');

const getOrdersByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await orderModel.getOrdersByUserId(userId);
    res.json({ success: true, orders });
  } catch (error) {
    console.error('Error getting orders:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Add other order-related controller functions as needed

module.exports = {
  getOrdersByUserId,
  // Add other order-related exports as needed
};
