import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FacultyCard = ({ doctor }) => {
  const { i18n, t } = useTranslation();
  const currentLang = (i18n.language || 'ar').substring(0, 2);

  
  const getText = (field) => {
    if (!field) return '';
    if (typeof field === 'object') {
      return field[currentLang] || field['ar'] || Object.values(field)[0] || '';
    }
    return field;
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
      <div className="p-6 flex-grow text-center">
        <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4"></div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{getText(doctor.name)}</h3>
        <p className="text-blue-600 text-sm font-medium mb-2">{getText(doctor.title)}</p>
        <p className="text-gray-500 text-sm">{getText(doctor.specialization)}</p>
      </div>

      <div className="p-6 pt-0 flex flex-row items-center gap-3">
        <Link 
          to={`/faculty/${doctor.id}`}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors text-sm"
        >
          {t('view_profile', 'التفاصيل')}
        </Link>
        <a 
          href={`mailto:${doctor.email}`}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-center py-2 px-4 rounded-lg font-medium transition-colors text-sm"
        >
          {t('contact', 'تواصل')}
        </a>
      </div>
    </div>
  );
};

export default FacultyCard;