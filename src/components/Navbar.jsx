import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('appLang') || 'ar';
  });

  useEffect(() => {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    localStorage.setItem('appLang', currentLang); 
  }, [currentLang]);

  const toggleLanguage = () => {
    setCurrentLang((prevLang) => (prevLang === 'ar' ? 'en' : 'ar'));
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 lg:px-16 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjVoGDGk4g1yrsA8HO6TRl_ALJrSMcd_MpswL1wqsvQ&s=10" 
                alt="Alexandria University Logo" 
                className="w-20 h-20 object-contain"
            />
          
          <div>
            <h1 className="font-bold text-slate-900 leading-tight text-base">
              {currentLang === 'ar' ? 'كلية الحاسبات وعلوم البيانات' : 'Faculty of Computers & Data Science'}
            </h1>
            <p className="text-xs text-slate-400 font-medium">
              {currentLang === 'ar' ? 'جامعة الإسكندرية' : 'Alexandria University'}
            </p>
          </div>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="about" className="hover:text-blue-600 transition-colors">
            {currentLang === 'ar' ? 'عن الكلية' : 'About'}
          </a>
          <a href="departments" className="hover:text-blue-600 transition-colors">
            {currentLang === 'ar' ? 'الأقسام' : 'Departments'}
          </a>
          <a href="programs" className="hover:text-blue-600 transition-colors">
            {currentLang === 'ar' ? 'البرامج' : 'Programs'}
          </a>
          <a href="news" className="hover:text-blue-600 transition-colors">
            {currentLang === 'ar' ? 'الأخبار' : 'News'}
          </a>
          <a href="contact" className="hover:text-blue-600 transition-colors">
            {currentLang === 'ar' ? 'تواصل معنا' : 'Contact'}
          </a>
        </nav>

        {/* Language Switcher Button */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 border border-slate-200 hover:border-blue-500 rounded-xl px-3.5 py-1.5 text-sm text-blue-600 font-medium transition-all hover:bg-blue-50"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span>{currentLang === 'ar' ? 'English' : 'العربية'}</span>
          </button>
        </div>

      </div>
    </header>
  );
}