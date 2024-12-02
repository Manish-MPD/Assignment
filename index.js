import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Calculator from './Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);

// If you want to measure performance, pass a function
reportWebVitals();
