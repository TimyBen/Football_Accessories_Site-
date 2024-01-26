// order item model
const db = require('../services/dbServices');

const getOrderItemsByOrderId = async (orderId) => {
  const query = 'SELECT * FROM order_items WHERE order_id = $1';
  const result = await db.query(query, [orderId]);
  return result.rows;
};

// Add other order item-related functions as needed

module.exports = {
  getOrderItemsByOrderId,
  // Add other order item-related exports as needed
};
