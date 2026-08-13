import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { newsData } from '../data/news';
import './content.css';

export const NewsDetails = () => {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const lang = i18n.language?.startsWith('ar') ? 'ar' : 'en';
  const article = newsData.find((item) => item.id === id);

  if (!article) {
    return (
      <main className="content-page">
        <section className="empty-state">
          <h1>404</h1>
          <h2>{t('news.articleNotFound')}</h2>
          <Link className="primary-button" to="/news">
            {t('news.backToNews')}
          </Link>
        </section>
      </main>
    );
  }

  const BackIcon = lang === 'ar' ? ArrowRight : ArrowLeft;

  return (
    <main className="content-page">
      <Link className="back-link" to="/news">
        <BackIcon size={18} aria-hidden="true" />
        {t('news.backToNews')}
      </Link>

      <article className="news-details">
        <div className="news-details__image-wrap">
          {article.image ? (
            <img src={article.image} alt={article.title[lang]} className="news-details__image" />
          ) : null}
        </div>

        <div className="news-details__content">
          <span className="content-card__badge">{article.category[lang]}</span>
          <h1>{article.title[lang]}</h1>

          <div className="content-card__meta news-details__date">
            <CalendarDays size={17} aria-hidden="true" />
            <time dateTime={article.date}>
              {new Date(`${article.date}T00:00:00`).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          <p className="news-details__summary">{article.summary[lang]}</p>
          <div className="news-details__body">{article.content[lang]}</div>
        </div>
      </article>
    </main>
  );
};
