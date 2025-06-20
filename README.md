📈 Stock Market Trend Analysis using Hybrid Deep Learning Model
🧠 Project Overview
This project presents a hybrid deep learning model that combines Long Short-Term Memory (LSTM) and Temporal Convolutional Networks (TCN) to predict stock market trends and prices with improved accuracy. The model uses both short-term and long-term market dependencies, along with technical indicators, to forecast future prices and detect trends.

A full-stack web application has also been developed using React.js and Django for real-time visualization, user interaction, and prediction insights.

🚀 Features
🔄 Hybrid LSTM + TCN architecture for time series prediction

📊 Technical indicator analysis: RSI, MACD, Bollinger Bands, ATR

🪄 Sliding Window-based Sequence Generation

📉 Smart Money Entry & Trend Detection

🌐 Full-stack web app with:

User/Admin login

Real-time stock predictions

Trend visualizations & dashboards

⚙️ Backend: Django + MySQL | Frontend: React

📌 Objectives
Predict stock price movement using LSTM and TCN

Use technical indicators for better feature representation

Build an interactive web application for real-time predictions

🛠️ Tech Stack
Area	Tools/Frameworks
Programming	Python, JavaScript
ML/DL	TensorFlow, Keras, NumPy, Scikit-learn
Data Handling	Pandas, Openpyxl, Yahoo Finance API
Visualization	Matplotlib, Seaborn
Frontend	React.js
Backend	Django (REST API)
Database	MySQL
IDE/Platform	Google Colab, Jupyter Notebook

🔍 Model Architecture
TCN Layer: Captures short-term dependencies using dilated causal convolutions.

LSTM Layer: Learns long-term patterns across time.

Dense Output: Predicts next-day stock price.

Trained using MSE loss and Adam optimizer.

📈 Results
Evaluation Metrics:

MSE: 0.0029

RMSE: 0.0538

MAE: 0.0423

R² Score: 0.94

Key Findings:

22.3% reduction in RMSE compared to traditional models

Strong performance in volatile market periods (e.g., earnings season)

🖥️ Web Application
Users can:

View future stock predictions (up to 90 days)

Analyze historical trends

Detect smart money entries

Admins can:

Add/edit stock data

Monitor system logs and predictions

🔄 Data Pipeline
📥 Data Collection: Yahoo Finance API (yfinance)

🧼 Preprocessing: Cleaning, Normalization, Feature Engineering

📐 Model Training: Sliding window approach for sequence creation

🌐 Deployment: Model connected via Django API to React frontend

📊 Sample Visualizations
📉 Actual vs Predicted Stock Prices (AAPL)

🧠 Technical Indicators (RSI, MACD, BB)

📈 Trend and Smart Money Entry Plots

🧪 Future Work
📣 Integrate Sentiment Analysis from news/Twitter

📊 Include macroeconomic indicators (e.g., inflation, GDP)

🤖 Explore Transformer-based models for improved forecasting

👨‍💻 Contributors
Balasubaramaniyam TS 

Mohamed Anas MH 

Balamurugan S 

📄 License
This project is for academic and research purposes. You may use and modify it with proper attribution.
