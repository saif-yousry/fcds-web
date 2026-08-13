import { useMemo, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnnouncementCard } from '../components/Announcements/AnnouncementCard';
import { announcementsData } from '../data/announcements';
import './content.css';

export const Announcements = () => {
  const { t } = useTranslation();
  const [category, setCategory] = useState('all');

  const categories = useMemo(
    () => [...new Set(announcementsData.map((item) => item.category))],
    []
  );

  const filteredAnnouncements = announcementsData.filter(
    (announcement) => category === 'all' || announcement.category === category
  );

  return (
    <main className="content-page">
      <section className="content-hero">
        <span className="content-hero__eyebrow">{t('announcements.eyebrow')}</span>
        <h1>{t('announcements.title')}</h1>
        <p>{t('announcements.description')}</p>
      </section>

      <section className="content-toolbar announcements-toolbar" aria-label={t('announcements.categoryFilter')}>
        <div className="filter-group" role="group" aria-label={t('announcements.categoryFilter')}>
          <SlidersHorizontal size={18} aria-hidden="true" />
          <button
            type="button"
            className={`filter-button ${category === 'all' ? 'is-active' : ''}`}
            onClick={() => setCategory('all')}
          >
            {t('common.all')}
          </button>
          {categories.map((item) => (
            <button
              type="button"
              className={`filter-button ${category === item ? 'is-active' : ''}`}
              key={item}
              onClick={() => setCategory(item)}
            >
              {t(`announcements.categories.${item}`)}
            </button>
          ))}
        </div>
      </section>

      {filteredAnnouncements.length ? (
        <section className="announcement-list" aria-live="polite">
          {filteredAnnouncements.map((announcement) => (
            <AnnouncementCard key={announcement.id} announcement={announcement} />
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <h2>{t('announcements.noResults')}</h2>
          <p>{t('announcements.noResultsDescription')}</p>
        </section>
      )}
    </main>
  );
};
