import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NotFound } from '../pages/NotFound';
import Layout from '../components/Layout/Layout';

// Real Pages (Home, About, Services, Events)
import Home from '../components/Home/home';
import About from '../pages/About';
import Services from '../pages/Services';
import Events from '../pages/Events';

// Real Components (Departments, Programs, Faculty)
import DepartmentsPage from '../components/Departments/DepartmentsPage';
import DepartmentDetails from '../components/Departments/DepartmentDetails';
import ProgramsPage from '../components/Programs/ProgramsPage';
import FacultyPage from '../components/Faculty/FacultyPage';
import FacultyDetails from '../components/Faculty/FacultyDetails';

// Placeholders for remaining pages
const News = () => <div style={{ padding: '2rem' }}>News Page</div>;
const NewsDetails = () => <div style={{ padding: '2rem' }}>News Details Page</div>;
const Announcements = () => <div style={{ padding: '2rem' }}>Announcements Page</div>;
const Contact = () => <div style={{ padding: '2rem' }}>Contact Page</div>;

export const AppRouter = () => {
  const { i18n } = useTranslation();

  return (
    <Routes>
      
      <Route element={<Layout key={i18n.language || 'ar'} />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Departments */}
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/departments/:id" element={<DepartmentDetails />} />

        {/* Programs */}
        <Route path="/programs" element={<ProgramsPage />} />

        {/* Faculty */}
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/faculty/:id" element={<FacultyDetails />} />

        {/* Other Routes */}
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;