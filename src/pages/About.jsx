import { useTranslation } from 'react-i18next';
import { Target, Eye, BookOpen, Users, Award, Lightbulb, ShieldCheck, Heart, Handshake, UsersRound } from 'lucide-react';

const values = [
  { key: 'valuesExcellence', icon: Award },
  { key: 'valuesInnovation', icon: Lightbulb },
  { key: 'valuesIntegrity', icon: ShieldCheck },
  { key: 'valuesCommunity', icon: Heart },
  { key: 'valuesDiversity', icon: UsersRound },
  { key: 'valuesCollaboration', icon: Handshake },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {t('about.pageTitle')}
            </h1>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-slate-50 rounded-2xl p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-gray-900">
                {t('about.missionTitle')}
              </h2>
              <p className="text-gray-500 leading-relaxed">
                {t('about.missionBody')}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-50 rounded-2xl p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-gray-900">
                {t('about.visionTitle')}
              </h2>
              <p className="text-gray-500 leading-relaxed">
                {t('about.visionBody')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Values */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
              {t('about.valuesTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <div key={value.key} className="flex flex-col items-center text-center gap-3 p-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {t(`about.${value.key}`)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* History */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              {t('about.historyTitle')}
            </h2>
          </div>
          <p className="text-gray-500 leading-relaxed text-center">
            {t('about.historyBody')}
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Leadership */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              {t('about.leadershipTitle')}
            </h2>
          </div>
          <p className="text-gray-500 leading-relaxed text-center">
            {t('about.leadershipBody')}
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
