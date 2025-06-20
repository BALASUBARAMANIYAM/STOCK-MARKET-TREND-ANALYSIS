import React, { useEffect, useState } from 'react';
import API from '../api';
import '../styles/StockList.css';

const StockList = ({ canDelete = false }) => {
  const [stocks, setStocks] = useState([]);

  const fetchStocks = async () => {
    try {
      const res = await API.get('/stocks/');
      setStocks(res.data);
    } catch (error) {
      console.error("Failed to fetch stocks", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this stock?")) {
      try {
        await API.delete(`/stocks/${id}/`);
        fetchStocks();
      } catch (error) {
        console.error("Failed to delete stock", error);
      }
    }
  };

  useEffect(() => {
    fetchStocks();
    window.addEventListener('stockAdded', fetchStocks);
    return () => window.removeEventListener('stockAdded', fetchStocks);
  }, []);

  return (
    <div className="stock-list">
      {stocks.map((stock) => {
        console.log("Image Path:", stock.chart_image);

        return (
          <div key={stock.id} className="stock-item">
            <h3>{stock.name} ({stock.prediction_period})</h3>
            <img src={stock.chart_image} alt={stock.name} width="300" />
            {canDelete && (
              <button onClick={() => handleDelete(stock.id)}>Delete</button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StockList;
