// src/routes/productRoute.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');  // Import Multer

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to get all products
router.get('/products', productController.getAllProducts);

// Route to get a single product by ID
router.get('/products/:id', productController.getProductById);

// Route to insert a new product
router.post('/products', upload.single('image'), productController.insertProduct);

// Route to update a product by ID
router.put('/products/:id', upload.single('image'), productController.updateProduct);

// Route to delete a product by ID
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
