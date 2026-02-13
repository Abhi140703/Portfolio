import { useEffect, useState } from "react";
import ArcReactorLoader from "./ArcReactorLoader";
import api from "../api/api";
import { Link } from "react-router-dom";
import ProjectsCarousel from "./ProjectsCarousel";

export default function ProjectSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const res = await api.get("/api/projects");
      setProjects(res.data.slice(0, 3)); // latest 3
    } catch (err) {
      console.log("PROJECT FETCH ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  /* LOADING STATE */
  if (loading) {
    return (
      <section id="projects" className="py-24 bg-bg">
        <div className="max-w-6xl mx-auto flex justify-center">
          <ArcReactorLoader />
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADING */}
        <h2 className="text-4xl font-bold text-dark mb-12 text-center">
          My Projects
        </h2>

        {/* CAROUSEL */}
        <ProjectsCarousel projects={projects} />

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="
              inline-block px-8 py-3 rounded-xl
              bg-accent text-white font-semibold
              hover:bg-dark transition
            "
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
