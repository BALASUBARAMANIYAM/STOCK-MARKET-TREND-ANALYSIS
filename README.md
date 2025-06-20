## 📈 **STOCK MARKET TREND ANALYSIS USING HYBRID DEEP LEARNING MODEL**  
🧠 **Project Overview**  
This project implements a **hybrid deep learning model** that combines **Long Short-Term Memory (LSTM)** and **Temporal Convolutional Networks (TCN)** to forecast stock market trends.  
It captures both short-term fluctuations and long-term trends using **technical indicators** like RSI, MACD, Bollinger Bands, and ATR to improve prediction accuracy.

A full-stack web application is built using **React.js** (Frontend) and **Django** (Backend) to deliver real-time stock predictions and market trend analysis.

---

## 🚀 **FEATURES**

- 🧠 **Hybrid LSTM + TCN Architecture**  
  Combines memory-based LSTM and fast-parallel TCN layers for accurate forecasting.

- 📊 **Technical Indicators**  
  Integrated indicators: **RSI**, **MACD**, **Bollinger Bands**, **ATR** to capture market behavior.

- 🧮 **Sliding Window-based Sequence Generation**  
  Converts historical data into sequences for training using a 60-day rolling window.

- 🧠 **Smart Money Entry Detection**  
  Identifies institutional investor activity using volume and trend signals.

- 🌐 **Full-Stack Web App**  
  User-friendly interface to input data, get predictions, and visualize trends.

---

## 💻 **TECH STACK**

| Layer        | Technologies Used                                 |
|--------------|----------------------------------------------------|
| **Frontend** | React.js                                           |
| **Backend**  | Django (REST Framework)                            |
| **Database** | MySQL                                              |
| **ML/DL**    | Python, TensorFlow, Keras, NumPy, Scikit-learn     |
| **Data**     | Yahoo Finance API (`yfinance`), pandas, openpyxl   |
| **Deployment** | Google Colab, Jupyter Notebook                   |

---

## 🧠 **MODEL ARCHITECTURE**
Input Sequence 
->
[ TCN Layers ]
->
[ LSTM Layers ]
->
[ Dense Output ]
->
Predicted Stock Price

- **Loss Function:** Mean Squared Error (MSE)  
- **Optimizer:** Adam  
- **Evaluation Metrics:** MSE, RMSE, MAE, R² Score  

---

## 📈 **RESULTS**

| Metric   | LSTM   | TCN    | Hybrid |
|----------|--------|--------|--------|
| **MSE**  | 0.0042 | 0.0038 | **0.0029** |
| **RMSE** | 0.0648 | 0.0616 | **0.0538** |
| **MAE**  | 0.0517 | 0.0510 | **0.0423** |
| **R²**   | 0.89   | 0.91   | **0.94**   |

✅ **The Hybrid model achieved the best performance in all metrics.**

---

## 📊 **WEB INTERFACE MODULES**

- 🔐 **Login/Register System** – Admin and User login
- 📥 **Stock Upload & Analysis** – Admin uploads stock info
- 📈 **Trend & Smart Entry Graphs** – Visuals with predictions
- 📡 **Real-time Data Fetching** – Via REST APIs (Django)

---

## 🔮 **FUTURE SCOPE**

- 📰 **Sentiment Analysis** from news/social media (Twitter, Reddit)  
- 🌍 **Macroeconomic Factors** like inflation, GDP, interest rate  
- 🧠 **Transformer/Attention-Based Models** for enhanced learning

---

## 👨‍💻 **TEAM MEMBERS**

- **Balasubaramaniyam TS** 
- **Mohamed Anas MH** 
- **Balamurugan S** 

---

## 📜 **LICENSE**

This repository is intended for academic research and learning.  
Feel free to use or modify the content with proper attribution.
