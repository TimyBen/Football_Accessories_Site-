const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/orders/:userId', orderController.getOrdersByUserId);

// Add other order-related routes as needed

module.exports = router;
