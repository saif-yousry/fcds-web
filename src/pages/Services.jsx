import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { servicesData } from '../data/services';
import ServiceCard from '../components/Services/ServiceCard';
import { Loader2 } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate brief loading state for static data
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('services.pageTitle')}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('services.pageSubtitle')}
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-8 h-8 text-primary-600 animate-spin" aria-hidden="true" />
            <p className="text-gray-500">{t('common.loading')}</p>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && servicesData.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">{t('services.emptyState')}</p>
          </div>
        )}

        {/* Services Grid */}
        {!isLoading && servicesData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Services;
