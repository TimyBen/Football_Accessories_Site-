const productService = require('../models/productModel');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    console.log('Products:', products);
    res.json(products);
  } catch (error) {
    console.error('Error getting products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await productService.getProductById(productId);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    console.error('Error getting product by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Insert a new product with image upload
const insertProduct = async (req, res) => {
  try {
    const { name, price, description, stock_quantity, category_id } = req.body;
    const imageBuffer = req.file.buffer; // Access the uploaded file buffer

    // Your existing code for inserting the product into the database
    const newProduct = await productService.insertProduct({
      name,
      image: imageBuffer, // Save the file buffer in the database
      price,
      description,
      stock_quantity,
      category_id,
    });

    res.status(201).json({ success: true, product: newProduct });
  } catch (error) {
    console.error('Error inserting product:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};



// Update a product by ID
const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const productData = req.body;

  try {
    const updatedProduct = await productService.updateProduct(productId, productData);
    if (!updatedProduct) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json({ success: true, product: updatedProduct });
    }
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const deletedProduct = await productService.deleteProduct(productId);
    if (!deletedProduct) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json({ success: true, product: deletedProduct });
    }
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
  // Add other product controller functions as needed
};
