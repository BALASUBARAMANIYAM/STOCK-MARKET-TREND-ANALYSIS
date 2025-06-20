import React, { useState, useRef } from 'react';
import API from '../api';
import '../styles/StockForm.css';
const StockForm = () => {
  const [name, setName] = useState('');
  const [period, setPeriod] = useState('1month');
  const [chart, setChart] = useState(null);
  const fileRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', name);
    form.append('prediction_period', period);
    form.append('chart_image', chart);

    try {
      await API.post('/stocks/', form);
      alert("Stock added");
      window.dispatchEvent(new Event('stockAdded'));
      setName('');
      setPeriod('1month');
      if (fileRef.current) fileRef.current.value = '';
    } catch (err) {
      alert(err.response?.data?.detail || 'Error adding stock');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Stock Name" required />
      <select value={period} onChange={(e) => setPeriod(e.target.value)}>
        <option value="1month">1 Month</option>
        <option value="3month">3 Months</option>
        <option value="6month">6 Months</option>
      </select>
      <input type="file" ref={fileRef} onChange={(e) => setChart(e.target.files[0])} required />
      <button type="submit">Add Stock</button>
    </form>
  );
};

export default StockForm;
