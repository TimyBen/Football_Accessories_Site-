// cart item model
const db = require('../services/dbServices');

const getCartItemsByCartId = async (cartId) => {
  const query = 'SELECT * FROM cart_items WHERE cart_id = $1';
  const result = await db.query(query, [cartId]);
  return result.rows;
};

// Add other cart item-related functions as needed

module.exports = {
  getCartItemsByCartId,
  // Add other cart item-related exports as needed
};
