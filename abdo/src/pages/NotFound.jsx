import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
      <h1 style={{ fontSize: '3rem', color: '#e11d48' }}>404</h1>
      <h2>{t('common.notFound')}</h2>
      <p style={{ color: '#666', margin: '1rem 0' }}>{t('common.notFoundDesc')}</p>
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          backgroundColor: '#0284c7',
          color: '#fff',
          padding: '0.6rem 1.2rem',
          borderRadius: '6px',
          textDecoration: 'none'
        }}
      >
        {t('common.backHome')}
      </Link>
    </div>
  );
};