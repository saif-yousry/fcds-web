import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';

const ProgramCard = ({ program }) => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  const langKey = currentLang?.startsWith('en') ? 'en' : 'ar';
  const isArabic = langKey === 'ar';

  return (
    <div 
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col h-full text-start"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="p-6 flex-grow text-start">
        
        {/* Program type*/}
        <div className="mb-4 inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">
          {program?.type === 'General' ? t('programs.general_program') : t('programs.specialized_program')}
        </div>
        
        {/* Pogram name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 text-start">
          {program?.name?.[langKey] || program?.name?.ar || ''}
        </h3>
        
        {/* Program Desc*/}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 text-start">
          {program?.description?.[langKey] || program?.description?.ar || ''}
        </p>
      </div>

      {/* Buttoms */}
      <div className="p-6 pt-0 flex flex-row items-center gap-3">
        <button 
          type="button"
          className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium text-sm cursor-default"
        >
          {t('programs.program_info')}
        </button>
        <button 
          type="button"
          className="flex-1 bg-gray-100 text-gray-800 text-center py-2 px-4 rounded-lg font-medium text-sm cursor-default"
        >
          {t('programs.registration_method')}
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;