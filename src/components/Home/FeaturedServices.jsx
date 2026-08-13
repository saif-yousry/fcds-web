import { useTranslation } from 'react-i18next';
import { servicesData } from '../../data/services';
import ServiceCard from '../Services/ServiceCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedServices = () => {
  const { t } = useTranslation();

  // Take first 3 services
  const featuredServices = servicesData.slice(0, 3);

  if (featuredServices.length === 0) return null;

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
            {t('home.featuredServicesTitle')}
          </h2>
          <p className="text-gray-500">
            {t('home.featuredServicesSubtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded"
          >
            {t('common.viewAll')}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
