// src/services/productService.js
const productModel = require('../models/productModel');

// Get all products
const getAllProducts = async () => {
    return await productModel.getAllProducts();
};

// Get a product by ID
const getProductById = async (productId) => {
    return await productModel.getProductById(productId);
};

// Insert a new product
const insertProduct = async (productData) => {
    return await productModel.insertProduct(productData);
};

// Update a product by ID
const updateProduct = async (productId, productData) => {
    return await productModel.updateProduct(productId, productData);
};

// Delete a product by ID
const deleteProduct = async (productId) => {
    return await productModel.deleteProduct(productId);
};

module.exports = {
    getAllProducts,
    getProductById,
    insertProduct,
    updateProduct,
    deleteProduct,
};
