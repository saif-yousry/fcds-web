import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { eventsData } from '../data/events.js';
import EventCard from '../components/Events/EventCard';
import { Search, X } from 'lucide-react';

const CATEGORIES = [
  { key: 'all', filterKey: 'events.filterAll' },
  { key: 'workshop', filterKey: 'events.filterWorkshop' },
  { key: 'seminar', filterKey: 'events.filterSeminar' },
  { key: 'hackathon', filterKey: 'events.filterHackathon' },
  { key: 'orientation', filterKey: 'events.filterOrientation' },
  { key: 'career', filterKey: 'events.filterCareer' },
  { key: 'lecture', filterKey: 'events.filterLecture' },
];

const Events = () => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  // Filter events based on active filters
  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      // Category filter
      if (activeCategory !== 'all' && event.category !== activeCategory) {
        return false;
      }

      // Search filter (search in both languages)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const titleEn = (event.title.en || '').toLowerCase();
        const titleAr = event.title.ar || '';
        if (!titleEn.includes(query) && !titleAr.includes(query)) {
          return false;
        }
      }

      // Date filter
      if (dateFilter) {
        if (event.date !== dateFilter) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, searchQuery, dateFilter]);

  const hasActiveFilters = activeCategory !== 'all' || searchQuery.trim() || dateFilter;

  const clearFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setDateFilter('');
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('events.pageTitle')}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t('events.pageSubtitle')}
          </p>
        </div>

        {/* Filters Section */}
        <div className="mb-10 space-y-6">
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3" role="group" aria-label={t('events.filterAll')}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 ${
                  activeCategory === cat.key
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700'
                }`}
                aria-pressed={activeCategory === cat.key}
              >
                {t(cat.filterKey)}
              </button>
            ))}
          </div>

          {/* Search & Date Filters */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" aria-hidden="true" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('events.searchPlaceholder')}
                className="w-full ps-10 pe-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent text-sm"
                aria-label={t('events.searchPlaceholder')}
              />
            </div>

            {/* Date Filter */}
            <div className="sm:w-48">
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent text-sm"
                aria-label={t('events.dateFilter')}
              />
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredEvents.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">{t('events.emptyState')}</p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded"
              >
                <X className="w-4 h-4" aria-hidden="true" />
                {t('events.clearFilters')}
              </button>
            )}
          </div>
        ) : (
          /* Events Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Events;
