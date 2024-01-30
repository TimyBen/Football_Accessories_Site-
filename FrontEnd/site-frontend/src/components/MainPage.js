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
            {/* <div className='w-full absolute top-16 left-12 z-30'>
                <div className='flex justify-start w-64 items-center gap-6 mt-2'>
                    <div className='w-24 text-center flex justify-center items-center border border-green-600 border-opacity-25 rounded-md h-8 '>
                        <a href="/login" class="block py-2 px-3 text-gray-900  transition-transform duration-300 hover:transform hover:scale-110 hover:bg-gray-50  dark:hover:bg-gray-700 dark:hover:text-gray-500 md:dark:hover:bg-transparent dark:border-gray-700">Login</a>
                    </div>
                    <div className='w-24 border text-center flex justify-center items-center border-green-600 border-opacity-25 rounded-md h-8 '>
                        <a href="/signup" class="block py-2 px-3 text-gray-900  transition-transform duration-300 hover:transform hover:scale-110 hover:bg-gray-50 dark:text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-500 md:dark:hover:bg-transparent dark:border-gray-700">Sign Up</a>
                    </div>
                </div>
            </div> */}

            <p className="text-xl mt-44">
                This is the main page of our website. Here you can find all the latest news and updates.
            </p>

            {/* Soccer Scene Images Slideshow
            <Slider {...settings}>
                {soccerSceneImages.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image.url} // Replace 'url' with the actual property containing the image URL
                            alt={`Soccer Scene ${index + 1}`}
                            className="w-full h-64 object-cover rounded mb-4"
                        />
                    </div>
                ))}
            </Slider> */}
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
                                className="w-full h-32 object-cover mb-4 rounded"
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

            {/* Display Filtered Products */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
                <div className="grid grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="p-4 bg-white rounded shadow">
                            {/* Product Image */}
                            <img
                                src={product.image} // Assuming your API provides the image URL
                                alt={product.name}
                                className="w-full h-32 object-cover mb-4 rounded"
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
                Explore More Products
            </button>
        </div>
    );
};

export default MainPage;
