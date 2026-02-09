import { Routes, Route } from "react-router-dom";

/* ADMIN PAGES */
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import BlogsAdmin from "./admin/BlogsAdmin";
import MessagesAdmin from "./admin/MessagesAdmin";
import ProjectsAdmin from "./admin/ProjectsAdmin";
import SettingsAdmin from "./admin/SettingsAdmin";
import CreateBlog from "./admin/CreateBlog";
import CreateProject from "./admin/CreateProject";

/* USER FRONTEND COMPONENTS */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* BLOG PAGES */
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";

/* PROJECT PAGES */
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./components/ProjectDetails";
import About from "./pages/About";

/*Contact Page*/
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<Login />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/blogs" element={<BlogsAdmin />} />
      <Route path="/admin/blogs/create" element={<CreateBlog />} />

      <Route path="/admin/projects" element={<ProjectsAdmin />} />
      <Route path="/admin/projects/create" element={<CreateProject />} />

      <Route path="/admin/messages" element={<MessagesAdmin />} />
      <Route path="/admin/settings" element={<SettingsAdmin />} />

      {/* PUBLIC HOME PAGE */}
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Hero />
            <Skills />
            <ProjectSection />
            <Blogs />
            <Contact />
            <Footer />
          </div>
        }
      />

      {/* BLOG ROUTES */}
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />

      {/* PROJECT ROUTES */}
      <Route path="/projects" element={<ProjectList />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/about" element={<About />} />

      {/*ContactPage*/}
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
