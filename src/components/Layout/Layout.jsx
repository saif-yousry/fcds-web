/**
 * ============================================================
 *  Temporary component - to be replaced
 *  Replace entirely when the real Navbar and Footer components are ready
 * ============================================================
 */

import { Outlet } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { Languages } from 'lucide-react';

const Layout = () => {
  const { currentLang, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    changeLanguage(currentLang === 'ar' ? 'en' : 'ar');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* TEMPORARY: Minimal top bar with language toggle for testing */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">
            {/* TEMPORARY: Placeholder brand text */}
            FCDS
          </span>
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
            aria-label={currentLang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            <Languages className="w-4 h-4" aria-hidden="true" />
            {currentLang === 'ar' ? 'EN' : 'عربي'}
          </button>
        </div>
      </header>

      {/* Page Content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* TEMPORARY: Minimal footer spacer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} FCDS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
