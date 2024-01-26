const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/login', authController.login);
// Add other authentication routes as needed

module.exports = router;
