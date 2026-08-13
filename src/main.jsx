import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n.js'; 

const savedLang = localStorage.getItem('i18nextLng') || 'ar';
const isArabic = savedLang.startsWith('ar');
const initialDir = isArabic ? 'rtl' : 'ltr';

document.documentElement.dir = initialDir;
document.documentElement.lang = isArabic ? 'ar' : 'en';
document.body.dir = initialDir;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);