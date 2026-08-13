import { CalendarDays, Bell, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const AnnouncementCard = ({ announcement }) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language?.startsWith('ar') ? 'ar' : 'en';

  return (
    <article className={`content-card announcement-card announcement-card--${announcement.priority}`}>
      <div className="announcement-card__icon" aria-hidden="true">
        <Bell size={22} />
      </div>

      <div className="content-card__body">
        <div className="content-card__meta">
          <CalendarDays size={16} aria-hidden="true" />
          <time dateTime={announcement.date}>
            {new Date(`${announcement.date}T00:00:00`).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
          <span className={`priority-badge priority-badge--${announcement.priority}`}>
            {t(`announcements.priority.${announcement.priority}`)}
          </span>
        </div>

        <h2 className="content-card__title">{announcement.title[lang]}</h2>
        <p className="content-card__summary">{announcement.content[lang]}</p>

        <span className="content-card__link content-card__link--static">
          {t('announcements.viewAnnouncement')}
          <ArrowUpRight size={17} aria-hidden="true" />
        </span>
      </div>
    </article>
  );
};
