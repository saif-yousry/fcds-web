import { useTranslation } from 'react-i18next';
import { Users, GraduationCap, BookOpen, FileText } from 'lucide-react';

const stats = [
  { key: 'statsStudents', value: '4,200+', icon: Users },
  { key: 'statsFaculty', value: '180+', icon: GraduationCap },
  { key: 'statsPrograms', value: '12', icon: BookOpen },
  { key: 'statsResearchPapers', value: '320+', icon: FileText },
];

const StatsBar = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl font-bold text-gray-900">
            {t('home.statsTitle')}
          </h2>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.key}
                className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow duration-200"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-primary-600" aria-hidden="true" />
                </div>
                {/* Number */}
                <span className="text-3xl lg:text-4xl font-bold text-gray-900">
                  {stat.value}
                </span>
                {/* Label */}
                <span className="text-sm text-gray-500">
                  {t(`home.${stat.key}`)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
