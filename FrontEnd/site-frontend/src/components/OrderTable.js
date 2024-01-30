import React from 'react';

const OrderTable = ({ orders }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Order ID</th>
          <th className="px-4 py-2">Customer Name</th>
          <th className="px-4 py-2">Product Name</th>
          <th className="px-4 py-2">Quantity</th>
          <th className="px-4 py-2">Total Price</th>
          {/* Add more columns based on your data */}
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.order_id}>
            <td className="border px-4 py-2">{order.order_id}</td>
            <td className="border px-4 py-2">{order.customer_name}</td>
            <td className="border px-4 py-2">{order.product_name}</td>
            <td className="border px-4 py-2">{order.quantity}</td>
            <td className="border px-4 py-2">{order.total_amount}</td>
            {/* Add more cells based on your data */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
