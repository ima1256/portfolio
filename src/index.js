import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
import { store } from './app/store'; // import the store
import { PortfolioProvider } from 'PortfolioContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <PortfolioProvider>
    <App />
  </PortfolioProvider>
  // </React.StrictMode>
);

reportWebVitals();
