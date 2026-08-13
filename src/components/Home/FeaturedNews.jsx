import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { newsData } from '../../data/news';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedNews = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  // Take first 3 news items (gracefully handles fewer)
  const featuredNews = newsData.slice(0, 3);

  if (featuredNews.length === 0) return null;

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
            {t('home.featuredNewsTitle')}
          </h2>
          <p className="text-gray-500">
            {t('home.featuredNewsSubtitle')}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredNews.map((item) => {
            const formattedDate = new Date(item.date).toLocaleDateString(
              currentLang === 'ar' ? 'ar-EG' : 'en-US',
              { year: 'numeric', month: 'short', day: 'numeric' }
            );

            const categoryText = typeof item.category === 'object'
              ? (item.category[currentLang] || item.category.en)
              : item.category;

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
              >
                {/* Top row: Category + Date */}
                <div className="flex items-center justify-between">
                  {item.category && (
                    <span className="bg-primary-50 text-primary-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {categoryText}
                    </span>
                  )}
                  <time dateTime={item.date} className="text-sm text-gray-400">
                    {formattedDate}
                  </time>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
                  {item.title[currentLang] || item.title.en}
                </h3>

                {/* Summary */}
                {item.summary && (
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
                    {item.summary[currentLang] || item.summary.en}
                  </p>
                )}

                {/* Read More */}
                <Link
                  to={`/news/${item.id}`}
                  className="inline-flex items-center gap-1 text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors mt-auto"
                >
                  {t('common.readMore')}
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/news"
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

export default FeaturedNews;