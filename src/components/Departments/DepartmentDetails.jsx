import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { departmentsData } from '../../data/departments';
import { facultyData } from '../../data/faculty'; 
import * as Icons from 'lucide-react';

const DepartmentDetails = () => {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'ar';

  const department = departmentsData.find((dept) => String(dept.id) === String(id));
  const departmentFaculty = facultyData.filter((doc) => String(doc.department) === String(id));

  if (!department) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('department_not_found')}</h2>
        <Link to="/departments" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
          {t('back_to_departments')}
        </Link>
      </div>
    );
  }

  const IconComponent = (department?.icon && Icons[department.icon]) ? Icons[department.icon] : Icons.BookOpen;

  const deptName = department?.name?.[currentLang] || department?.name?.['ar'] || '';
  const deptDesc = department?.description?.[currentLang] || department?.description?.['ar'] || '';

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Department Info Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
              <IconComponent size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {deptName}
            </h1>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {deptDesc}
          </p>

          {/* Action Links */}
          <div className="flex flex-row items-center gap-4 border-t border-gray-100 pt-6">
            <Link 
              to="/departments" 
              className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 px-6 rounded-xl font-medium transition-colors"
            >
              {t('departments.back')}
            </Link>
            <Link 
              to={`/faculty?dept=${department.id}`} 
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-6 rounded-xl font-medium transition-colors"
            >
              {t('departments.view_all_faculty')}
            </Link>
          </div>
        </div>

        {/* Faculty Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Icons.Users size={24} className="text-blue-600" />
            {t('departments.department_faculty')}
          </h2>
          
          {departmentFaculty.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {departmentFaculty.map((doc) => {
                const docName = doc?.name?.[currentLang] || doc?.name?.['ar'] || '';
                const docTitle = doc?.title?.[currentLang] || doc?.title?.['ar'] || '';

                return (
                  <div key={doc.id} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icons.User size={24} className="text-gray-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{docName}</h4>
                      <p className="text-sm text-gray-500">{docTitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500">{t('no_faculty')}</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default DepartmentDetails;