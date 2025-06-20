import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import RegisterForm from './components/RegisterForm';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

import './styles/Global.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [isAdmin, setIsAdmin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogin = (adminStatus) => {
    setIsLoggedIn(true);
    setIsAdmin(adminStatus);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  // Set or remove dark-mode class on <body>
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Router>
        <Routes>
          <Route path="/" element={<Home toggleDarkMode={() => setDarkMode(!darkMode)} />} />
          <Route path="/admin-login" element={<AdminLogin onLogin={handleLogin} />} />
          <Route path="/user-login" element={<UserLogin onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterForm />} />

          {/* Role-based Dashboards */}
          <Route
            path="/admin-dashboard"
            element={
              isLoggedIn && isAdmin ? (
                <AdminDashboard onLogout={handleLogout} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/user-dashboard"
            element={
              isLoggedIn && !isAdmin ? (
                <UserDashboard onLogout={handleLogout} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
