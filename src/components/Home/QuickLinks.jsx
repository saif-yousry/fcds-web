import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Building2, Users, BookOpen, Mail } from 'lucide-react';

const links = [
  {
    to: '/departments',
    titleKey: 'home.quickLinkDepartments',
    descKey: 'home.quickLinkDepartmentsDesc',
    icon: Building2,
  },
  {
    to: '/faculty',
    titleKey: 'home.quickLinkFaculty',
    descKey: 'home.quickLinkFacultyDesc',
    icon: Users,
  },
  {
    to: '/programs',
    titleKey: 'home.quickLinkPrograms',
    descKey: 'home.quickLinkProgramsDesc',
    icon: BookOpen,
  },
  {
    to: '/contact',
    titleKey: 'home.quickLinkContact',
    descKey: 'home.quickLinkContactDesc',
    icon: Mail,
  },
];

const QuickLinks = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
            {t('home.quickLinksTitle')}
          </h2>
          <p className="text-gray-500">
            {t('home.quickLinksSubtitle')}
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                {/* Icon Chip */}
                <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center group-hover:bg-primary-700 transition-colors">
                  <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900">
                  {t(link.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500">
                  {t(link.descKey)}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
