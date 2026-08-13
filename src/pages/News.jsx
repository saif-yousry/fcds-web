import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NewsCard } from '../components/News/NewsCard';
import { newsData } from "../data/news";
import './content.css';

export const News = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language?.startsWith('ar') ? 'ar' : 'en';
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const categories = useMemo(
    () => [...new Set(newsData.map((item) => item.category))],
    []
  );

  const filteredNews = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return newsData.filter((article) => {
      const matchesCategory = category === 'all' || article.category === category;
      const searchable = [
        article.title[lang],
        article.summary[lang],
        article.category[lang],
      ].join(' ').toLocaleLowerCase();

      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [category, lang, query]);

  const clearFilters = () => {
    setQuery('');
    setCategory('all');
  };

  return (
    <main className="content-page">
      <section className="content-hero">
        <span className="content-hero__eyebrow">{t('news.eyebrow')}</span>
        <h1>{t('news.title')}</h1>
        <p>{t('news.description')}</p>
      </section>

      <section className="content-toolbar" aria-label={t('news.filtersLabel')}>
        <label className="search-box">
          <Search size={19} aria-hidden="true" />
          <span className="sr-only">{t('common.search')}</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t('common.search')}
          />
          {query && (
            <button type="button" className="icon-button" onClick={() => setQuery('')} aria-label={t('common.clearSearch')}>
              <X size={18} />
            </button>
          )}
        </label>

        <div className="filter-group" role="group" aria-label={t('news.categoryFilter')}>
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
              {item[lang]}
            </button>
          ))}
        </div>
      </section>

      <p className="results-count">
        {t('news.resultsCount', { count: filteredNews.length })}
      </p>

      {filteredNews.length ? (
        <section className="content-grid" aria-live="polite">
          {filteredNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <h2>{t('news.noResults')}</h2>
          <p>{t('news.noResultsDescription')}</p>
          <button type="button" className="primary-button" onClick={clearFilters}>
            {t('common.clearFilters')}
          </button>
        </section>
      )}
    </main>
  );
};
