// ProductManagement.js
import React, { useEffect, useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend and setProducts
    // Example: fetch('http://localhost:4000/products').then(response => response.json()).then(data => setProducts(data));
  }, []);

  const handleSaveProduct = (newProduct) => {
    // Save the new product to the backend
    // Example: fetch('http://localhost:4000/products', { method: 'POST', body: JSON.stringify(newProduct), headers: { 'Content-Type': 'application/json' } })
    //   .then(response => response.json())
    //   .then(data => setProducts([...products, data]));
  };

  return (
    <div>
      <h2>Product Management</h2>
      <ProductForm onSave={handleSaveProduct} />
      <ProductTable products={products} />
    </div>
  );
};

export default ProductManagement;
