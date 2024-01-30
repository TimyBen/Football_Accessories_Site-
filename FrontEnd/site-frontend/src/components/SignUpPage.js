import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Sidebar from './SideBar';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    full_name: Yup.string().required('Full Name is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
});

const SignUpPage = () => {
    const initialValues = {
        full_name: '',
        username: '',
        password: '',
        email: '',
        address: '',
    };

    const handleSignUp = async (values) => {
        try {
            const response = await fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Signup successful:', data);
                // Handle success, e.g., redirect to login page or display a success message
            } else {
                const errorData = await response.json();
                console.error('Signup failed:', errorData.error);
                // Handle error, e.g., display an error message to the user
            }
        } catch (error) {
            console.error('Error during signup:', error.message);
            // Handle error, e.g., display an error message to the user
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100" >
            <div className='fixed blur-[2px] w-full h-full ' style={{ backgroundImage: `url(${require('../assets/soccer-cleats.jpeg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <header className='w-full bg-transparent text-gray-800 fixed top-0 h-36 z-10'>
                <div className='h-24 flex justify-between items-center'>
                    <div className='w-full'>
                        <div className='flex justify-center items-center mt-16 flex-grow'>
                            <a href="/" className="text-[90px] font-bold transition-transform duration-300 text-center text-gray-100 hover:transform hover:scale-110 mb-5 flex justify-center items-center gap-2">Pro Gear <div className='w-24 h-24' style={{ backgroundImage: `url(${require('../assets/mainimg.png')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> Hub</a>
                        </div>
                    </div>
                    <div className='absolute right-8 top-8 '>
                        <div>
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-rose-400 bg-opacity-80 p-8 rounded z-10 shadow-md mt-24 w-96">
                <h2 className="text-2xl text-gray-200 font-bold mb-6">Sign Up</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={SignUpSchema}
                    onSubmit={handleSignUp}
                >
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="full_name" className="block text-gray-200 text-sm font-bold mb-2">
                                Full Name
                            </label>
                            <Field
                                type="text"
                                id="full_name"
                                name="full_name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="full_name" component="div" className="text-red-500 text-xs mt-1" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-200 text-sm font-bold mb-2">
                                Username
                            </label>
                            <Field
                                type="text"
                                id="username"
                                name="username"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="username" component="div" className="text-red-500 text-xs mt-1" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-200 text-sm font-bold mb-2">
                                Password
                            </label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-200 text-sm font-bold mb-2">
                                Email
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="address" className="block text-gray-200 text-sm font-bold mb-2">
                                Address
                            </label>
                            <Field
                                type="text"
                                id="address"
                                name="address"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage name="address" component="div" className="text-red-500 text-xs mt-1" />
                        </div>

                        <button
                            type="submit"
                            href='/login'
                            className="bg-red-700 bg-opacity-40 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            <a href="/login" class="block text-gray-200  transition-transform duration-300 hover:transform hover:scale-110 hover:bg-gray-50 dark:text-gray-100 md:dark:hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-100 md:dark:hover:bg-transparent dark:border-gray-100">Sign Up</a>
                        </button>
                    </Form>
                </Formik>

                <div className="mt-4">
                    <Link to="/login" className="text-white hover:underline">
                        Already have an account? Log in here.
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;