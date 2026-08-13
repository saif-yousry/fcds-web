import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Calendar, MapPin } from 'lucide-react';

const EventCard = ({ event }) => {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  // Format date based on current language
  const formattedDate = new Date(event.date).toLocaleDateString(
    currentLang === 'ar' ? 'ar' : 'en',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  // Get category label from translation keys
  const categoryKey = `events.filter${event.category.charAt(0).toUpperCase() + event.category.slice(1)}`;

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
      {/* Image */}
      {event.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title[currentLang] || event.title.en}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Category Badge */}
          <span className="absolute top-3 start-3 bg-primary-50 text-primary-600 text-xs font-medium px-3 py-1 rounded-full">
            {t(categoryKey)}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {event.title[currentLang] || event.title.en}
        </h3>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
          <time dateTime={event.date}>{formattedDate}</time>
        </div>

        {/* Location */}
        {event.location && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{event.location[currentLang] || event.location.en}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-3">
          {event.description[currentLang] || event.description.en}
        </p>
      </div>
    </article>
  );
};

export default EventCard;
