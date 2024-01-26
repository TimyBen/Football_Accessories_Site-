// src/components/SignUp.js
import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
                {/* Add your signup form here */}

                <div className="mt-4">
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Already have an account? Log in here.
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
