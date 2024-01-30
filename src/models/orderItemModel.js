// order item model
const db = require('../services/dbServices');

const getOrderItemsByOrderId = async () => {
  const query = 'SELECT * FROM order_item';
  const result = await db.query(query, []);
  return result.rows;
};

// Add other order item-related functions as needed

module.exports = {
  getOrderItemsByOrderId,
  // Add other order item-related exports as needed
};
