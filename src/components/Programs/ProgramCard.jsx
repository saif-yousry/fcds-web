import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProgramCard = ({ program }) => {
  const { i18n, t } = useTranslation();
  
  
  const currentLang = (i18n.language || 'en').substring(0, 2);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
      <div className="p-6 flex-grow">
        
        
        <div className="mb-4 inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">
          {program.type === 'General' ? t('general_program', 'برنامج عام') : t('specialized_program', 'برنامج متخصص')}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {program.name[currentLang]}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {program.description[currentLang]}
        </p>
      </div>

      
      <div className="p-6 pt-0 flex flex-row items-center gap-3">
        <Link 
          to="/departments" 
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors text-sm"
        >
          {t('view_departments', 'استعراض الأقسام')}
        </Link>
        <Link 
          to="/services" 
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-center py-2 px-4 rounded-lg font-medium transition-colors text-sm"
        >
          {t('register_now', 'طريقة التسجيل')}
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;