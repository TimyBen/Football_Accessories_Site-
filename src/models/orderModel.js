// order model
const db = require('../services/dbServices');

const getOrdersByUserId = async (userId) => {
  const query = 'SELECT * FROM orders WHERE user_id = $1';
  const result = await db.query(query, [userId]);
  return result.rows;
};

// Add other order-related functions as needed

module.exports = {
  getOrdersByUserId,
  // Add other order-related exports as needed
};
