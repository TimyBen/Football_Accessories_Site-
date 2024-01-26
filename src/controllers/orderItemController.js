const orderItemModel = require('../models/orderItemModel');

const getOrderItemsByOrderId = async (req, res) => {
  const { orderId } = req.params;

  try {
    const orderItems = await orderItemModel.getOrderItemsByOrderId(orderId);
    res.json({ success: true, orderItems });
  } catch (error) {
    console.error('Error getting order items:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Add other order item-related controller functions as needed

module.exports = {
  getOrderItemsByOrderId,
  // Add other order item-related exports as needed
};
