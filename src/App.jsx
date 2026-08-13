<<<<<<< HEAD
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import AppRouter from './routes/AppRouter';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-100">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}
=======
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import { useLanguage } from './hooks/useLanguage';

function App() {
  useLanguage(); 

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
>>>>>>> origin/task3-essam
