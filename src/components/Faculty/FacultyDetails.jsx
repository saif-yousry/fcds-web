import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { facultyData } from '../../data/faculty';

const FacultyDetails = () => {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const currentLang = (i18n.language || 'en').substring(0, 2);

 
  const getText = (field) => {
    if (!field) return '';
    if (typeof field === 'object') {
      return field[currentLang] || field['en'] || Object.values(field)[0] || '';
    }
    return field;
  };


  const doctor = facultyData.find(d => String(d.id) === String(id));

  if (!doctor) {
    return <div className="text-center py-20 text-2xl">لم يتم العثور على بيانات العضو.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex-shrink-0"></div>
            <div className="text-center md:text-start">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{getText(doctor.name)}</h1>
              <p className="text-xl text-blue-600 mb-2">{getText(doctor.title)}</p>
              <p className="text-gray-500">{getText(doctor.specialization)}</p>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-4">{t('bio', 'نبذة شخصية')}</h2>
            <p className="text-gray-700 leading-relaxed">{getText(doctor.bio)}</p>
          </div>

       
          <div className="mt-10 flex flex-row items-center justify-center md:justify-start gap-4">
            <Link to="/faculty" className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-6 rounded-lg font-medium transition-colors">
              {t('back', 'رجوع للقائمة')}
            </Link>
            <a href={`mailto:${doctor.email}`} className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors">
              {t('contact', 'إرسال إيميل')}
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FacultyDetails;