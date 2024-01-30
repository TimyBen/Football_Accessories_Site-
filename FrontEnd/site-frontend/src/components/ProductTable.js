// ProductTable.js
import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          {/* Add more columns based on your product data */}
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>${product.price}</td>
            {/* Add more cells based on your product data */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
