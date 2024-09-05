import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // นำเข้าไฟล์ CSS สำหรับการใช้งานหลัก
import App from './App'; // นำเข้าจากไฟล์ `App.js` ที่อยู่ในไดเรกทอรี `src` โดยตรง
import reportWebVitals from './reportWebVitals'; // นำเข้าจากไฟล์ `reportWebVitals.js` ที่อยู่ในไดเรกทอรี `src` โดยตรง

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
