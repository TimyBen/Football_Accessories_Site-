const express = require('express');
const router = express.Router();
const cartItemController = require('../controllers/cartItemController');

router.get('/cart-items/:cartId', cartItemController.getCartItemsByCartId);

// Add other cart item-related routes as needed

module.exports = router;
