import { Routes, Route } from "react-router-dom";
import { NotFound } from "../pages/NotFound";

// Departments
import DepartmentsPage from "../components/Departments/DepartmentsPage";
import DepartmentDetails from "../components/Departments/DepartmentDetails";
// Programs
import ProgramsPage from "../components/Programs/ProgramsPage";
// Faculty
import FacultyPage from "../components/Faculty/FacultyPage";
import FacultyDetails from "../components/Faculty/FacultyDetails";

const Home = () => <div style={{ padding: "2rem" }}>Home Page</div>;
const About = () => <div style={{ padding: "2rem" }}>About Page</div>;
const News = () => <div style={{ padding: "2rem" }}>News Page</div>;
const NewsDetails = () => (<div style={{ padding: "2rem" }}>News Details Page</div>);
const Announcements = () => (<div style={{ padding: "2rem" }}>Announcements Page</div>);
const Services = () => <div style={{ padding: "2rem" }}>Services Page</div>;
const Events = () => <div style={{ padding: "2rem" }}>Events Page</div>;
const Contact = () => <div style={{ padding: "2rem" }}>Contact Page</div>;

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* departments */}
      <Route path="/departments" element={<DepartmentsPage />} />
      <Route path="/departments/:id" element={<DepartmentDetails />} />
      {/* programs */}
      <Route path="/programs" element={<ProgramsPage />} />

      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsDetails />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/faculty" element={<FacultyPage />} />
      <Route path="/faculty/:id" element={<FacultyDetails />} />
      <Route path="/services" element={<Services />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter; 