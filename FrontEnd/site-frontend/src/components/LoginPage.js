// components/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ProductBackground from './ProductBackground';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginAttempts, setLoginAttempts] = useState(0);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                navigate('/user');
                // Handle success, e.g., set user state or redirect to another page
            } else if (response.status === 401) {
                console.error('Incorrect password. Please enter the correct password.');
                setLoginAttempts(loginAttempts + 1);

                // Handle incorrect password, e.g., show an error message to the user
            } else {
                console.error('Login failed:', response.statusText);
                setLoginAttempts(loginAttempts + 1);
            }
        } catch (error) {
            console.error('Error during login:', error.message);
            // Handle error, e.g., show an error message
        }
    };

    useEffect(() => {
        // Check if loginAttempts is greater than a threshold
        if (loginAttempts >= 3) {
            // Perform additional actions, such as showing a message or blocking login
            console.log('Too many login attempts. Displaying a message or taking action.');
        }
        console.log("Attempt: ", loginAttempts);
    }, [loginAttempts]);


    return (
        <div className="min-h-screen flex items-center justify-center">
            <ProductBackground />
            <header className='w-full bg-transparent text-gray-800 fixed top-0 h-36 z-10'>

                <div className='h-24 flex justify-between items-center '>
                    <div className='w-full'>
                        <div className='flex justify-center items-center mt-16 flex-grow'>
                            <a href="/" className="text-[90px] font-bold transition-transform duration-300 text-center text-gray-900 hover:transform hover:scale-110 mb-5 flex justify-center items-center gap-2">Pro Gear <div className='w-24 h-24' style={{ backgroundImage: `url(${require('../assets/mainimg.png')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> Hub</a>
                        </div>
                    </div>
                    <div className='absolute right-8 top-8'>
                        <div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-gray-300  p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    {loginAttempts > 0 && <p>Incorrect password. Please try again.</p>}
                </form>
                <div className="mt-4">
                    <p className="text-gray-500 text-sm">Don't have an account? <Link to="/signup" className="text-blue-500">Sign up here.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
