import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = ({ toggleDarkMode }) => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <button className="dark-toggle" onClick={toggleDarkMode}>
        🌓
      </button>
      <div className="card">
        <h1>Welcome to Stock Prediction Portal</h1>
        <div className="button-group">
          <button onClick={() => navigate('/admin-login')}>Admin Login</button>
          <button onClick={() => navigate('/user-login')}>User Login</button>
          <button onClick={() => navigate('/register')}>User Registration</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
