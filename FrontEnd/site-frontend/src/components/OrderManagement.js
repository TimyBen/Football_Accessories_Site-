// OrderManagement.js
import React, { useEffect, useState } from 'react';
import OrderTable from './OrderTable';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the backend
    fetch('http://localhost:4000/order-items/')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data received from server:', data);
        setOrders(data.orderItems);
      })
      .catch((error) => console.error('Error fetching orders:', error));
  }, [orders]);

  return (
    <div>
      <h2>Order Management</h2>
      <OrderTable orders={orders} />
    </div>
  );
};

export default OrderManagement;
