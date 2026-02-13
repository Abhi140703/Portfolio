import { Routes, Route } from "react-router-dom";

/* LAYOUT */
import Layout from "./Layout";

/* ADMIN PAGES */
import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import BlogsAdmin from "./admin/BlogsAdmin";
import MessagesAdmin from "./admin/MessagesAdmin";
import ProjectsAdmin from "./admin/ProjectsAdmin";
import SettingsAdmin from "./admin/SettingsAdmin";
import CreateBlog from "./admin/CreateBlog";
import CreateProject from "./admin/CreateProject";

/* HOME SECTIONS */
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

/* BLOG PAGES */
import BlogList from "./pages/BlogList";
import BlogPage from "./pages/BlogPage";

/* PROJECT PAGES */
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./components/ProjectDetails";

/* OTHER PAGES */
import About from "./pages/About";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      {/* ADMIN ROUTES (NO LAYOUT) */}
      <Route path="/admin" element={<Login />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/blogs" element={<BlogsAdmin />} />
      <Route path="/admin/blogs/create" element={<CreateBlog />} />
      <Route path="/admin/projects" element={<ProjectsAdmin />} />
      <Route path="/admin/projects/create" element={<CreateProject />} />
      <Route path="/admin/messages" element={<MessagesAdmin />} />
      <Route path="/admin/settings" element={<SettingsAdmin />} />

      {/* PUBLIC HOME */}
      <Route
        path="/"
        element={
          <Layout>
            <Hero />
            <Skills />
            <ProjectSection />
            <Blogs />
            <Contact />
          </Layout>
        }
      />

      {/* BLOG ROUTES */}
      <Route
        path="/blogs"
        element={
          <Layout>
            <BlogList />
          </Layout>
        }
      />
      <Route
        path="/blogs/:slug"
        element={
          <Layout>
            <BlogPage />
          </Layout>
        }
      />

      {/* PROJECT ROUTES */}
      <Route
        path="/projects"
        element={
          <Layout>
            <ProjectList />
          </Layout>
        }
      />
      <Route
        path="/projects/:id"
        element={
          <Layout>
            <ProjectDetails />
          </Layout>
        }
      />

      {/* ABOUT */}
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />

      {/* CONTACT PAGE */}
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />
    </Routes>
  );
}
