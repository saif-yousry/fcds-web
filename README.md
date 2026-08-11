# Faculty of Computers and Data Science (FCDS) - Web Platform

Official responsive web application for the Faculty of Computers and Data Science at Alexandria University, built with React.js and Vite. High performance, accessible, responsive, and fully bilingual (Arabic/English) with dynamic RTL/LTR directionality.

---

## 📸 Overview
This platform presents academic programs, departments, faculty members, campus news, announcements, events, and student e-services using clean, reusable React architecture and modern design standards.

## ✨ Core Features & Technical Highlights
- **Full Internationalization (i18n):** Complete dynamic translation management (`react-i18next`) with state persistence in `localStorage`.
- **Dynamic Directionality:** Automatic HTML `dir="rtl"` and `dir="ltr"` DOM switching via custom React hooks without layout duplication.
- **Clean Architecture & Data Separation:** Structured JS data schemas supporting bilingual models without hardcoded text.
- **Comprehensive Routing:** React Router setup covering all required core routes and a dedicated 404 Not Found view.
- **Responsive Design:** Optimized layout targeting desktop, tablet, and mobile devices (tested down to 360px).

---

## 🛠️ Tech Stack
- **Framework:** React.js (Vite)
- **Routing:** React Router v6
- **i18n:** `i18next`, `react-i18next`, `i18next-browser-languagedetector`
- **Iconography:** `lucide-react`
- **Version Control:** Git & GitHub

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0 or higher recommended)
- `npm` or `yarn`

### Installation & Running Locally
1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/your-username/fcds-web.git](https://github.com/your-username/fcds-web.git)
   cd fcds-web
2. **Install Dependencies:**
    npm install
3. **Start Develpment Server**
    npm run dev

### Project Architecture
src/
├── assets/          # Static images and icons
├── components/      # Reusable UI components
├── data/            # Normalized bilingual JS mock data
├── hooks/           # Custom hooks (e.g., useLanguage)
├── layouts/         # Layout wrappers
├── locales/         # i18n JSON dictionaries (ar/en)
├── pages/           # View pages
├── routes/          # Application router configuration
├── utils/           # Helper functions
├── i18n.js          # Core i18n configuration
├── App.jsx          # Root component
└── main.jsx         # Entry point
### Commit Conventions
This project strictly enforces Conventional Commit standards:
-   feat: New features or architecture setups
-   fix: Bug fixes
-   style: Styling, layout, or visual updates
-   documentation: Documentation additions or updates
-   refactor: Code improvements without functionality changes