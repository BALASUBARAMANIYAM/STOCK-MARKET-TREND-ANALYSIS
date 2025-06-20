import React, { useEffect, useState } from 'react';
import StockForm from './StockForm';
import StockList from './StockList';
import API from '../api';
import { toast } from 'react-toastify';
import '../styles/AdminDashboard.css';

const AdminDashboard = ({ onLogout }) => {
  const [logs, setLogs] = useState({ admin_logins: [], user_logins: [] });

  const fetchLogs = async () => {
    try {
      const res = await API.get('/logs/');
      setLogs(res.data);
    } catch {
      toast.error("Error loading login logs");
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <button onClick={() => {
        localStorage.removeItem('token');
        onLogout();
      }}>Logout</button>

      <h3>Add New Stock</h3>
      <StockForm />

      <h3>All Stocks</h3>
      <StockList canDelete={true} />

      <h3>Admin Login Logs</h3>
      <ul>
        {logs.admin_logins.map((log, i) => (
          <li key={i}>{log.admin_user__username} — {new Date(log.login_time).toLocaleString()}</li>
        ))}
      </ul>

      <h3>User Login Logs</h3>
      <ul>
        {logs.user_logins.map((log, i) => (
          <li key={i}>{log.user__username} — {new Date(log.login_time).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
