import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sidebar from './SideBar';

const MainPageLogin = () => {
    const [products, setProducts] = useState([]);
    const [soccerSceneImages, setSoccerSceneImages] = useState([]);

    useEffect(() => {
        // Fetch soccer scene images
        fetch('http://localhost:4000/products/')
            .then((response) => response.json())
            .then((data) => setSoccerSceneImages(data))
            .catch((error) => console.error('Error fetching soccer scene images:', error));

        // Fetch products from the API
        fetch('http://localhost:4000/products/')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="flex w-full flex-col items-center justify-center min-h-screen">
            <header className='w-full bg-transparent text-gray-800 fixed top-0 h-36 z-10'>

                <div className='h-24 flex justify-between items-center'>
                    <div className='w-full'>
                        <div className='flex justify-center items-center mt-16 flex-grow'>
                            <a href="/user" className="text-[90px] font-bold transition-transform duration-300 text-center text-gray-900 hover:transform hover:scale-110 mb-5 flex justify-center items-center gap-2">Pro Gear <div className='w-24 h-24' style={{ backgroundImage: `url(${require('../assets/mainimg.png')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> Hub</a>
                        </div>
                    </div>
                    <div className='absolute right-8 top-8'>
                        <div>
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </header>
            <p className="text-xl mt-44">
                This is the main page of our website. Here you can find all the latest news and updates.
            </p>

            {/* Soccer Scene Images Slideshow */}
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
            </Slider>

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

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
                Explore More Products
            </button>
        </div>
    );
};

export default MainPageLogin;
