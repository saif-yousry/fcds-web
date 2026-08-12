import React from 'react';
import { useTranslation } from 'react-i18next';
import ProgramCard from './ProgramCard';
import { programsData } from '../../data/programs'; 

const ProgramsPage = () => {
  const { t } = useTranslation();

  const generalPrograms = programsData.filter(p => p.type === 'General');
  const specializedPrograms = programsData.filter(p => p.type === 'Specialized');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('programs_title', 'البرامج الأكاديمية')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('programs_subtitle', 'اكتشف برامجنا الأكاديمية المتميزة التي تلبي احتياجات سوق العمل وتواكب التطور التكنولوجي.')}
          </p>
        </div>

        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            {t('general_programs', 'البرامج العامة')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalPrograms.map((prog) => (
              <ProgramCard key={prog.id} program={prog} />
            ))}
          </div>
        </div>

        
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            {t('specialized_programs', 'البرامج المتخصصة')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedPrograms.map((prog) => (
              <ProgramCard key={prog.id} program={prog} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProgramsPage;