// UserForm.js
import React, { useState } from 'react';

const UserForm = ({ onSave }) => {
  const [user, setUser] = useState({
    // Define your user form fields here
    username: '',
    email: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSave prop to save the new user
    onSave(user);
    // Clear the form after saving
    setUser({
      username: '',
      email: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add your form fields here */}
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={user.username} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={user.email} onChange={handleChange} />
      </div>
      {/* Add more fields as needed */}
      <div>
        <button type="submit">Save User</button>
      </div>
    </form>
  );
};

export default UserForm;
