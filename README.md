📈 STOCK MARKET TREND ANALYSIS USING HYBRID DEEP LEARNING MODEL
🧠 PROJECT OVERVIEW
This project presents a hybrid deep learning model that combines Long Short-Term Memory (LSTM) and Temporal Convolutional Networks (TCN) to predict stock market trends and prices. It captures both short-term and long-term dependencies using technical indicators to generate highly accurate forecasts.

A full-stack web application is developed using React.js and Django for real-time predictions and user interaction.

🚀 FEATURES
🔄 Hybrid LSTM + TCN architecture

📊 Technical Indicators: RSI, MACD, Bollinger Bands, ATR

🪄 Sliding Window-based Sequence Generator

📉 Smart Money Entry & Trend Detection

🌐 Full-Stack Web App

User/Admin login system

Real-time stock forecasts

Admin dashboard for data control

📌 OBJECTIVES
Develop a Hybrid Model using LSTM + TCN to capture short and long-term stock patterns

Use Technical Indicators for improving accuracy (RSI, MACD, BB, ATR)

Create a Web App using React + Django for end-user interaction

🛠️ TECH STACK
Component	Technology
Programming	Python, JavaScript
ML Frameworks	TensorFlow, Keras
Data Handling	Pandas, NumPy, Yahoo Finance API
Visualization	Matplotlib, Seaborn
Frontend	React.js
Backend	Django REST Framework
Database	MySQL
Platform	Google Colab, Jupyter Notebook

🔍 MODEL ARCHITECTURE
TCN Block: Extracts local and short-term temporal features

LSTM Block: Learns long-term dependencies

Dense Output Layer: Predicts the stock price

Loss Function: Mean Squared Error (MSE)

Optimizer: Adam

📈 RESULTS
Metric	LSTM	TCN	Hybrid (TCN + LSTM)
MSE	0.0042	0.0038	0.0029
RMSE	0.0648	0.0616	0.0538
MAE	0.0517	0.051	0.0423
R² Score	0.89	0.91	0.94

✅ Hybrid model achieves best performance in all metrics

🖥️ WEB APPLICATION MODULES
User Module

Enter stock name & date range

View real-time prediction chart

Admin Module

Upload/Manage stock data

Monitor trend & prediction logs

Smart Money Detection

Shows likely institutional investor entries

📊 DATA PIPELINE
📥 Data Collection (via Yahoo Finance API)

🧼 Preprocessing (cleaning, scaling, technical indicators)

📐 Training (TCN → LSTM → Dense)

🌐 Deployment (Django + React integration)

📉 SAMPLE VISUALIZATIONS
📊 AAPL Stock Prediction vs Actual

🧠 Technical Indicator Graphs

📈 Smart Money Entry Points

🔮 Future Forecasts (90 days)

🧪 FUTURE WORK
📣 Add Sentiment Analysis from Twitter & News

📊 Integrate Macroeconomic Indicators

🤖 Try Transformer/Attention-based models

👨‍💻 CONTRIBUTORS
Balasubaramaniyam TS 

Mohamed Anas MH

Balamurugan S

📄 LICENSE
This project is built for academic & research purposes. Feel free to use or extend with credit.
