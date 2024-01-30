// Sidebar.js

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={` text-gray-900 font-serif mt-12 mr-4 text-xl font-bold ${isOpen ? 'hidden md:block' : ''}`}>

            <div id="mega-menu" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                    <li>
                        <div className='w-24 text-center flex justify-center items-center border-blue-600 border-opacity-25 border-2 rounded-md h-8 '>

                            <a href="/" class="block py-2 px-3 text-gray-600 transition-transform duration-300 hover:transform hover:scale-110 border-b border-gray-100 hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0 dark:text-gray-700 md:dark:hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                        </div>
                    </li>
                    <li>
                        <div className='w-36 text-center flex justify-center items-center border-blue-600 border-opacity-25 border-2 rounded-md h-8 '>

                            <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" class="flex items-center justify-between w-full py-2 px-3 font-medium transition-transform duration-300 hover:transform hover:scale-110 text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                Categories <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                        </div>
                        <div id="mega-menu-dropdown" class="absolute z-10 hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                            <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-gray-700">
                                <ul class="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                                    <li>
                                        <a href="/" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Library
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Resources
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Pro Version
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                                <ul class="space-y-4">
                                    <li>
                                        <a href="/" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Newsletter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            Playground
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                            License
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </li>


                    <li>
                        <div className='w-24 text-center flex justify-center items-center border-blue-600 border-opacity-25 border-2 rounded-md h-8 '>
                            <a href="/login" class="block py-2 px-3 text-gray-900 border-b border-gray-100 transition-transform duration-300 hover:transform hover:scale-110 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-500 md:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                        </div>
                    </li>
                    <li>
                        <div className='w-24 text-center flex justify-center items-center border-blue-600 border-opacity-25 border-2 rounded-md h-8 '>
                            <a href="/signup" class="block py-2 px-3 text-gray-900 border-b border-gray-100 transition-transform duration-300 hover:transform hover:scale-110 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
