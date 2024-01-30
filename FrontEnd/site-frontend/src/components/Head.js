// Header.js
import React, { useEffect, useState } from 'react';
import Sidebar from './SideBar';

const Header = () => {
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }

      prevScrollPos = currentScrollPos;
    };
    console.log(scrollingUp);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollingUp]);

  return (
    <header
      className={`w-full bg-transparent text-gray-800 fixed top-0 h-36 z-10 ${scrollingUp ? 'header-slide-up' : ''
        }`}
      style={scrollingUp ? { transform: 'translateY(-100%)', transition: 'transform 0.5s ease-in-out' } : {}}
    >
      <div className=' absolute top-16 right-2'>
        <div className='flex justify-start w-64 items-center gap-6'>
          <div className='w-24 text-center flex justify-center items-center border-blue-600 border-opacity-25 border-2 rounded-md h-8 '>
            <a href="/login" class="block py-2 px-3 text-gray-900  transition-transform duration-300 hover:transform hover:scale-110 hover:bg-gray-50 dark:text-gray-500 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-500 md:dark:hover:bg-transparent dark:border-gray-700">Login</a>
          </div>
          <div className='w-24 text-center flex justify-center items-center border-blue-600 border-opacity-25 border-2 rounded-md h-8 '>
            <a href="/signup" class="block py-2 px-3 text-gray-900  transition-transform duration-300 hover:transform hover:scale-110 hover:bg-gray-50 dark:text-gray-500 md:dark:hover:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-500 md:dark:hover:bg-transparent dark:border-gray-700">Sign Up</a>
          </div>
        </div>
      </div>
      <div className='h-24 flex justify-between items-center'>
        <div className='w-full'>
          <div className='flex justify-center items-center mt-16 flex-grow'>
            <a href="/" className="text-[70px] font-bold transition-transform duration-300 text-center text-gray-900 hover:transform hover:scale-110 mb-5 flex justify-center items-center gap-2">Pro Gear <div className='w-20 h-20' style={{ backgroundImage: `url(${require('../assets/mainimg.png')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> Hub</a>
          </div>
        </div>
        <div className='absolute left-10 top-8'>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
