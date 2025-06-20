import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/UserLogin.css';

const UserLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        email,
        password,
      });

      const token = response.data.token;
      const isAdmin = response.data.is_admin;

      if (isAdmin) {
        toast.error('This email belongs to an admin. Use Admin Login.');
        return;
      }

      toast.success('User login successful!');
      localStorage.setItem('token', token);
      onLogin(false); // false = user
      nav('/user-dashboard');
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error('Invalid email or password');
      } else if (error.response?.status === 404) {
        toast.error('User not found with this email');
      } else {
        toast.error('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="user-login-wrapper">
      <div className="user-login-box">
        <h2>User Login (Email)</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserLogin;
