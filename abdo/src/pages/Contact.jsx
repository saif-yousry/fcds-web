import { useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './content.css';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export const Contact = () => {
  const { t } = useTranslation();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!values.name.trim()) nextErrors.name = t('contact.validation.nameRequired');
    if (!values.email.trim()) {
      nextErrors.email = t('contact.validation.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = t('contact.validation.emailInvalid');
    }
    if (!values.phone.trim()) {
      nextErrors.phone = t('contact.validation.phoneRequired');
    } else if (!/^[+()\d\s-]{7,20}$/.test(values.phone.trim())) {
      nextErrors.phone = t('contact.validation.phoneInvalid');
    }
    if (!values.message.trim()) nextErrors.message = t('contact.validation.messageRequired');
    else if (values.message.trim().length < 10) nextErrors.message = t('contact.validation.messageShort');

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setValues(initialValues);
  };

  return (
    <main className="content-page contact-page">
      <section className="content-hero">
        <span className="content-hero__eyebrow">{t('contact.eyebrow')}</span>
        <h1>{t('contact.title')}</h1>
        <p>{t('contact.description')}</p>
      </section>

      <section className="contact-layout">
        <aside className="contact-info">
          <div className="contact-info__item">
            <Mail size={22} aria-hidden="true" />
            <div>
              <h2>{t('contact.emailLabel')}</h2>
              <a href="mailto:info@fcds.alexu.edu.eg">info@fcds.alexu.edu.eg</a>
            </div>
          </div>
          <div className="contact-info__item">
            <Phone size={22} aria-hidden="true" />
            <div>
              <h2>{t('contact.phoneLabel')}</h2>
              <a href="tel:+2030000000">+20 3 000 0000</a>
            </div>
          </div>
          <div className="contact-info__item">
            <MapPin size={22} aria-hidden="true" />
            <div>
              <h2>{t('contact.locationLabel')}</h2>
              <p>{t('contact.location')}</p>
            </div>
          </div>
        </aside>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {submitted && (
            <div className="success-banner" role="status">
              <CheckCircle2 size={22} aria-hidden="true" />
              <span>{t('contact.success')}</span>
            </div>
          )}

          <div className="form-grid">
            <FormField
              id="name"
              label={t('contact.name')}
              value={values.name}
              onChange={handleChange}
              error={errors.name}
              required
            />
            <FormField
              id="email"
              label={t('contact.email')}
              type="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            <FormField
              id="phone"
              label={t('contact.phone')}
              type="tel"
              value={values.phone}
              onChange={handleChange}
              error={errors.phone}
              required
            />
          </div>

          <FormField
            id="message"
            label={t('contact.message')}
            value={values.message}
            onChange={handleChange}
            error={errors.message}
            required
            textarea
          />

          <button type="submit" className="primary-button form-submit">
            <Send size={18} aria-hidden="true" />
            {t('contact.submit')}
          </button>
        </form>
      </section>
    </main>
  );
};

const FormField = ({ id, label, value, onChange, error, required, type = 'text', textarea = false }) => {
  const inputId = `contact-${id}`;
  const errorId = `${inputId}-error`;

  return (
    <div className={`form-field ${error ? 'has-error' : ''}`}>
      <label htmlFor={inputId}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={inputId}
          name={id}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          rows={7}
        />
      ) : (
        <input
          id={inputId}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          autoComplete={id}
        />
      )}
      {error && <p className="field-error" id={errorId} role="alert">{error}</p>}
    </div>
  );
};
