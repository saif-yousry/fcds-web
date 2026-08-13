import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import ProgramCard from './ProgramCard';
import { programsData } from '../../data/programs'; 

const ProgramsPage = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  const generalPrograms = programsData.filter(p => p.type === 'General');
  const specializedPrograms = programsData.filter(p => p.type === 'Specialized');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('programs.programs_title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('programs.programs_subtitle')}
          </p>
        </div>

        {/* General Programs Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            {t('programs.general_programs')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalPrograms.map((prog) => (
              <ProgramCard 
                key={`${prog.id}-${currentLang}`} 
                program={prog} 
              />
            ))}
          </div>
        </div>

        {/* Specialized Programs Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            {t('programs.specialized_programs')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedPrograms.map((prog) => (
              <ProgramCard 
                key={`${prog.id}-${currentLang}`} 
                program={prog} 
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProgramsPage;