const db = require('../services/dbServices');

// Get all products
const getAllProducts = async () => {
    const query = 'SELECT name, price, description FROM products';
    const result = await db.query(query);
    return result.rows;
};

// Get a single product by ID
const getProductById = async (productId) => {
    const query = 'SELECT name, description, price FROM products WHERE product_id = $1';
    const result = await db.query(query, [productId]);
    return result.rows[0];
};

// Insert a new product
const insertProduct = async (productData) => {
    const {
        name,
        image,
        price,
        description,
        stock_quantity,
        category_id
    } = productData;

    const query = `
    INSERT INTO public.products(name, image, price, description, stock_quantity, category_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

    const result = await db.query(query, [name, image, price, description, stock_quantity, category_id]);
    return result.rows[0];
};

// Update a product by ID
const updateProduct = async (productId, updatedFields) => {
    const {
        name,
        image,
        price,
        description,
        stock_quantity,
        category_id
    } = updatedFields;

    // Construct the dynamic update query based on provided fields
    const updateQuery = [];
    const queryParams = [];

    if (name !== undefined) {
        updateQuery.push('name = $1');
        queryParams.push(name);
    }

    if (image !== undefined) {
        // Use the Buffer.from method to convert the image data to bytea
        const imageData = Buffer.from(image, 'base64'); // Assuming the image is sent as base64 from the client
        updateQuery.push('image = $2');
        queryParams.push(imageData);
    }

    if (price !== undefined) {
        updateQuery.push('price = $3');
        queryParams.push(price);
    }

    if (description !== undefined) {
        updateQuery.push('description = $4');
        queryParams.push(description);
    }

    if (stock_quantity !== undefined) {
        updateQuery.push('stock_quantity = $5');
        queryParams.push(stock_quantity);
    }

    if (category_id !== undefined) {
        updateQuery.push('category_id = $6');
        queryParams.push(category_id);
    }

    const query = `
      UPDATE public.products
      SET ${updateQuery.join(', ')}
      WHERE product_id = $7
      RETURNING *;
    `;

    const result = await db.query(query, [...queryParams, productId]);
    return result.rows[0];
};

// Delete a product by ID
const deleteProduct = async (productId) => {
    const query = 'DELETE FROM public.products WHERE product_id = $1 RETURNING *';
    const result = await db.query(query, [productId]);
    return result.rows[0];
};

module.exports = {
    getAllProducts,
    getProductById,
    insertProduct,
    updateProduct,
    deleteProduct,
    // Add other product model functions as needed
};
