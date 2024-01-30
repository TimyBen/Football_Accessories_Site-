// AdminUI.js
import React from 'react';
import UserManagement from './UserManagement';
import ProductManagement from '../components/ProductManagment';
import OrderManagement from '../components/OrderManagement';

const AdminUI = () => {
  // You can use state or routing to switch between user, product, and order management views

  return (
    <div>
      <h1>Welcome to Admin Dashboard</h1>
      <div>
        {/* Display User Management */}
        <UserManagement />
      </div>
      <div>
        {/* Display Product Management */}
        <ProductManagement />
      </div>
      <div>
        {/* Display Order Management */}
        <OrderManagement />
      </div>
    </div>
  );
};

export default AdminUI;
