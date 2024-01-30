import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './Head';

const MainPage = () => {
    const [products, setProducts] = useState([]);
    const [soccerSceneImages, setSoccerSceneImages] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Fetch soccer scene images
        fetch('http://localhost:4000/products/')
            .then((response) => response.json())
            .then((data) => setSoccerSceneImages(data))
            .catch((error) => console.error('Error fetching soccer scene images:', error));

        // Fetch products from the API
        fetch('http://localhost:4000/products/')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const handleSearch = () => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredProducts(filtered);
    };


    return (
        <div className="flex w-full flex-col items-center justify-center min-h-screen">

            <Header />
            {/* Soccer Scene Images Slideshow */}
            <Slider {...settings}>
                {soccerSceneImages.map((image, index) => (
                    <div key={index}>
                        <img
                            src={'http://localhost:4000/products/' + image.url}
                            alt={`Soccer Scene ${index + 1}`}
                            className="w-64 h-64 object-cover rounded mb-4"
                        />
                    </div>
                ))}
            </Slider>
            <p className="text-xl mt-44">
                This is the main page of our website. Here you can find all the latest news and updates.
            </p>



            <div className="mt-4 mb-8">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleSearch}
                    className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Search
                </button>
            </div>
            {/* Display Products */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
                <div className="grid grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="p-4 bg-white rounded shadow">
                            {/* Product Image */}
                            <img
                                src={product.image} // Assuming your API provides the image URL
                                alt={product.name}
                                className="w-full h-54 object-cover mb-4 rounded"
                            />

                            {/* Product Details */}
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-sm text-gray-500">${product.price}</p>

                            {/* Add more product details as needed */}
                            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-4 mb-8">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleSearch}
                    className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Search
                </button>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
                Explore More Products
            </button>

        </div>
    );
};

export default MainPage;
