import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/image.png';

const Hero = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();
  const isRTL = currentLang === 'ar';

  return (
    <section className="bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-start max-w-xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 border border-gray-200 bg-white px-3.5 py-1.5 rounded-full text-primary-600 text-sm font-medium mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary-600 shrink-0" aria-hidden="true" />
              {t('home.heroBadge')}
            </span>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
              {t('home.heroTitle')}
            </h1>

            {/* Subtitle */}
            <p className="text-base lg:text-lg text-gray-500 leading-relaxed mb-10">
              {t('home.heroSubtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                {t('home.heroCta')}
                <ArrowRight className="w-5 h-5 rtl:rotate-180" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 text-gray-700 font-medium px-6 py-3 rounded-lg hover:text-primary-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                {t('home.heroCtaSecondary')}
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt={t('home.heroBadge')}
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
