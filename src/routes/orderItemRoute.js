const express = require('express');
const router = express.Router();
const orderItemController = require('../controllers/orderItemController');

router.get('/order-items/', orderItemController.getOrderItemsByOrderId);

// Add other order item-related routes as needed

module.exports = router;
