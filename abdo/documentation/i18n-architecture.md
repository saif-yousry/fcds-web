# Internationalization (i18n) & RTL/LTR Architectural Documentation

## Overview
This Web Application provides bilingual support (Arabic and English) with full dynamic Right-to-Left (RTL) and Left-to-Right (LTR) layout direction switching, maintaining user preference state across sessions.

## Technical Implementation
- **Framework**: `i18next` & `react-i18next`.
- **State Persistence**: Configured via `i18next-browser-languagedetector` with `localStorage` priority.
- **Direction Handling**: Managed centrally through `src/hooks/useLanguage.js` which mutates `document.documentElement.dir` and `lang` attributes dynamically.

## Data Localization Pattern
All dynamic entity collections (Departments, News, Events, Faculty, Services) use normalized bilingual JSON objects:
```json
{
  "title": {
    "ar": "عنوان بالعربية",
    "en": "English Title"
  }
}