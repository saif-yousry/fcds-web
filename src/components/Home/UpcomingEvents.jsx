import { useTranslation } from 'react-i18next';
import { eventsData } from '../../data/events.js';
import EventCard from '../Events/EventCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const UpcomingEvents = () => {
  const { t } = useTranslation();

  // Sort by date ascending and take next 3 upcoming events (from today onward)
  const today = new Date().toISOString().split('T')[0];
  const upcomingEvents = [...eventsData]
    .filter((event) => event.date >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);

  // If no upcoming events, show the 3 most recent past events
  const displayEvents = upcomingEvents.length > 0
    ? upcomingEvents
    : [...eventsData].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

  if (displayEvents.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">
            {t('home.upcomingEventsTitle')}
          </h2>
          <p className="text-gray-500">
            {t('home.upcomingEventsSubtitle')}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            to="/events"
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

export default UpcomingEvents;
