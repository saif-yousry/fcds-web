import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import FacultyCard from './FacultyCard';
import { facultyData } from '../../data/faculty'; 

const FacultyPage = () => {
  const { i18n, t } = useTranslation();
  const currentLang = (i18n.language || 'en').substring(0, 2);
  
  
  const [searchParams] = useSearchParams();
  const urlDept = searchParams.get('dept'); 

  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState(urlDept || 'All');

  
  const filteredFaculty = facultyData.filter((doctor) => {
    
    const matchesSearch = doctor.name[currentLang].toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDept = selectedDept === 'All' || doctor.departmentId === selectedDept;
    
    return matchesSearch && matchesDept;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          {t('faculty_directory', 'أعضاء هيئة التدريس')}
        </h1>

        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder={t('search_name', 'ابحث بالاسم...')}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-right"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <select
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-right"
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
          >
            <option value="All">{t('all_departments', 'كل الأقسام')}</option>
            <option value="cs">علوم الحاسب</option>
            <option value="ds">علوم البيانات</option>
            <option value="is">الأنظمة الذكية</option>
          </select>
        </div>

       
        {filteredFaculty.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFaculty.map(doctor => (
              <FacultyCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">
            {t('no_results', 'لا توجد نتائج مطابقة.')}
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyPage;