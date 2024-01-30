// UserTable.js
import React from 'react';

const UserTable = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          {/* Add more columns based on your user data */}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            {/* Add more cells based on your user data */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
