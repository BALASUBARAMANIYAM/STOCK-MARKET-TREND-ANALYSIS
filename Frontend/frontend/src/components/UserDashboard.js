import React from 'react';
import StockList from './StockList';
import '../styles/UserDashboard.css';

const UserDashboard = ({ onLogout }) => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <button onClick={() => {
        localStorage.removeItem('token');
        onLogout();
      }}>Logout</button>
      <StockList canDelete={false} />
    </div>
  );
};

export default UserDashboard;
