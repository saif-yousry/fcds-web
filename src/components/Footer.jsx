import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6 lg:px-16 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8">
        <div>
          <h2 className="text-white font-bold text-lg">Faculty of Computers & Information</h2>
          <p className="text-sm text-slate-500 mt-1">Shaping the future of technology and computing.</p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#departments" className="hover:text-white transition-colors">Departments</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-6 text-center md:text-left text-xs text-slate-500">
        © {new Date().getFullYear()} Faculty of Computers & Information. All rights reserved.
      </div>
    </footer>
  );
}