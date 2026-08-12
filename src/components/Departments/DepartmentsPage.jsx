import React from 'react';
import { useTranslation } from 'react-i18next';
import DepartmentCard from './DepartmentCard';
import { departmentsData } from '../../data/departments'; 

const DepartmentsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('departments_title', 'الأقسام الأكاديمية')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('departments_subtitle', 'تعرف على أقسام الكلية والبرامج الأكاديمية المتاحة.')}
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentsData.map((dept) => (
            <DepartmentCard key={dept.id} department={dept} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default DepartmentsPage;