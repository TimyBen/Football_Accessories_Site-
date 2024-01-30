// UserManagement.js
import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import UserTable from './UserTable';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend and setUsers
    // Example: fetch('http://localhost:4000/users').then(response => response.json()).then(data => setUsers(data));
  }, []);

  const handleSaveUser = (newUser) => {
    // Save the new user to the backend
    // Example: fetch('http://localhost:4000/users', { method: 'POST', body: JSON.stringify(newUser), headers: { 'Content-Type': 'application/json' } })
    //   .then(response => response.json())
    //   .then(data => setUsers([...users, data]));
  };

  return (
    <div>
      <h2>User Management</h2>
      <UserForm onSave={handleSaveUser} />
      <UserTable users={users} />
    </div>
  );
};

export default UserManagement;
