import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/RegisterForm.css';

const RegisterForm = () => {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    username: '',
    password: ''
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/register/', form);
  
      if (response.status === 201) {
        toast.success("Registration successful!");
        nav("/user-login");
      } else {
        toast.error("Unexpected response from server.");
      }
    } catch (err) {
      if (err.response?.status === 400) {
        const errorData = err.response.data;
        const errorMessage = Object.values(errorData).flat().join(' ');
        toast.error(`Registration failed: ${errorMessage}`);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };
  
  return (
    <div className="register-wrapper">
      <div className="register-box">
        <h2>User Registration</h2>
        <form onSubmit={register}>
          <input
            name="full_name"
            placeholder="Full Name"
            value={form.full_name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
