// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import MainPage from './components/MainPage';
import MainPageLogin from './components/MainPageLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/user' element={<MainPageLogin />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
