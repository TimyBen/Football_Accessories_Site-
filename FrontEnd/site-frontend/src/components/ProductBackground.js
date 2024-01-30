// components/ProductBackground.js
import React, { useState, useEffect } from 'react';

const ProductBackground = () => {
    const [productImages, setProductImages] = useState([]);

    useEffect(() => {
        // Fetch product images from the localhost products route
        fetch('http://localhost:4000/products/')
            .then((response) => response.json())
            .then((data) => {
                // Extract image URLs from the data (adjust based on your API response structure)
                const images = data.map((product) => `url(${product.image})`);
                setProductImages(images);
            })
            .catch((error) => console.error('Error fetching product images:', error));
    }, []);

    // Randomly select a product image
    const randomProductImage = productImages[Math.floor(Math.random() * productImages.length)];

    return (
        <div
            className="absolute inset-0 bg-contain bg-center -z-10 blur-[6px]"
            style={{ backgroundImage: randomProductImage }}
        />
    );
};

export default ProductBackground;
