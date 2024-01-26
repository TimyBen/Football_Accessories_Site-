const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/login/', userController.login);
// Add other authentication routes as needed

module.exports = router;
