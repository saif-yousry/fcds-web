import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import {
  ArrowRight,
  GraduationCap,
  UserCircle,
  BookOpen,
  Headphones,
  Briefcase,
  Monitor,
  Settings,
} from 'lucide-react';

// Map icon name strings from data to actual Lucide components
const iconMap = {
  GraduationCap,
  UserCircle,
  BookOpen,
  Headphones,
  Briefcase,
  Monitor,
  Settings,
};

const ServiceCard = ({ service }) => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  // Resolve icon component from string name, fallback to Settings
  const IconComponent = iconMap[service.icon] || Settings;

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
      {/* Icon Chip */}
      <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shrink-0">
        <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900">
        {service.title[currentLang] || service.title.en}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed flex-1">
        {service.description[currentLang] || service.description.en}
      </p>

      {/* Learn More Link */}
      <a
        href={service.link || '#'}
        className="inline-flex items-center gap-1.5 text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded"
      >
        {t('common.learnMore')}
        <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
      </a>
    </article>
  );
};

export default ServiceCard;
