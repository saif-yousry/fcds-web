import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './routes/AppRouter';
import { useLanguage } from './hooks/useLanguage';

export default function App() {
  useLanguage();

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between bg-slate-100">
       
        <AppRouter />
        
      </div>
    </BrowserRouter>
  );
}