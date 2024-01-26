// cart model
const db = require('../services/cartService');

const getCartByUserId = async (userId) => {
  const query = 'SELECT * FROM carts WHERE user_id = $1';
  const result = await db.query(query, [userId]);
  return result.rows[0];
};

// Add other cart-related functions as needed

module.exports = {
  getCartByUserId,
  // Add other cart-related exports as needed
};
