const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/carts/:userId', cartController.getCartByUserId);

// Add other cart-related routes as needed

module.exports = router;
