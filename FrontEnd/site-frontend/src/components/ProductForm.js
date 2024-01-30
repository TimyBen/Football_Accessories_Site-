// ProductForm.js
import React, { useState } from 'react';

const ProductForm = ({ onSave }) => {
  const [product, setProduct] = useState({
    // Define your product form fields here
    name: '',
    price: 0,
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSave prop to save the new product
    onSave(product);
    // Clear the form after saving
    setProduct({
      name: '',
      price: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add your form fields here */}
      <div>
        <label htmlFor="name">Product Name:</label>
        <input type="text" id="name" name="name" value={product.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" value={product.price} onChange={handleChange} />
      </div>
      {/* Add more fields as needed */}
      <div>
        <button type="submit">Save Product</button>
      </div>
    </form>
  );
};

export default ProductForm;
