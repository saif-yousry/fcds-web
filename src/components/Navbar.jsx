import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language?.startsWith('ar');

  const toggleLanguage = () => {
    const nextLang = isArabic ? 'en' : 'ar';
    i18n.changeLanguage(nextLang);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 lg:px-16 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxjVoGDGk4g1yrsA8HO6TRl_ALJrSMcd_MpswL1wqsvQ&s=10" 
            alt="Alexandria University Logo" 
            className="w-20 h-20 object-contain"
          />
          
          <div>
            <h1 className="font-bold text-slate-900 leading-tight text-base">
              {isArabic ? 'كلية الحاسبات وعلوم البيانات' : 'Faculty of Computers & Data Science'}
            </h1>
            <p className="text-xs text-slate-400 font-medium">
              {isArabic ? 'جامعة الإسكندرية' : 'Alexandria University'}
            </p>
          </div>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link to="/about" className="hover:text-blue-600 transition-colors">
            {t('nav_about', isArabic ? 'عن الكلية' : 'About')}
          </Link>
          <Link to="/departments" className="hover:text-blue-600 transition-colors">
            {t('nav_departments', isArabic ? 'الأقسام' : 'Departments')}
          </Link>
          <Link to="/programs" className="hover:text-blue-600 transition-colors">
            {t('nav_programs', isArabic ? 'البرامج' : 'Programs')}
          </Link>
          <Link to="/news" className="hover:text-blue-600 transition-colors">
            {t('nav_news', isArabic ? 'الأخبار' : 'News')}
          </Link>
          <Link to="/services" className="hover:text-blue-600 transition-colors">
            {t('nav_services', isArabic ? 'الخدمات' : 'Services')}
          </Link>
          <Link to="/events" className="hover:text-blue-600 transition-colors">
            {t('nav_events', isArabic ? 'أحداث' : 'Events')}
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">
            {t('nav_contact', isArabic ? 'تواصل معنا' : 'Contact')}
          </Link>
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
            <span>{isArabic ? 'English' : 'العربية'}</span>
          </button>
        </div>

      </div>
    </header>
  );
}