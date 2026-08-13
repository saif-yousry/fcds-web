import { Link } from 'react-router-dom';
import { CalendarDays, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const NewsCard = ({ article }) => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language?.startsWith('ar') ? 'ar' : 'en';

  return (
    <article className="content-card news-card">
      <div className="news-card__image-wrap">
        {article.image ? (
          <img className="news-card__image" src={article.image} alt={article.title[lang]} />
        ) : (
          <div className="news-card__image news-card__image--placeholder" aria-hidden="true">
            {t('news.imagePlaceholder')}
          </div>
        )}
        <span className="content-card__badge">{article.category[lang]}</span>
      </div>

      <div className="content-card__body">
        <div className="content-card__meta">
          <CalendarDays size={16} aria-hidden="true" />
          <time dateTime={article.date}>
            {new Date(`${article.date}T00:00:00`).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
        </div>

        <h2 className="content-card__title">{article.title[lang]}</h2>
        <p className="content-card__summary">{article.summary[lang]}</p>

        <Link className="content-card__link" to={`/news/${article.id}`}>
          {t('common.readMore')}
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
};
