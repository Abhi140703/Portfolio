import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import SafeImage from "../components/SafeImage";

export default function ProjectSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const res = await api.get("/api/projects");
      setProjects(res.data.slice(0, 3)); // Show only 3 latest
    } catch (err) {
      console.log("PROJECT FETCH ERROR:", err);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <p
        className="text-center text-gray-600 mt-10"
        style={{ WebkitTextStroke: "1px black" }}
      >
        Loading Projects...
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-20" id="projects">
      <h1
        className="text-4xl font-bold text-[#ffbb02] mb-10 text-center"
        style={{ WebkitTextStroke: "2px black" }}
      >
        My Projects
      </h1>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       {projects.map((p) => (
  <ProjectCard key={p._id} project={p} />
))}

      </div>

      {/* VIEW ALL BUTTON */}
      <div className="text-center mt-10">
        <Link
          to="/projects"
          className="px-6 py-3 bg-[#ffbb02] text-white rounded-lg hover:bg-[#ffbb02] transition 
    [-webkit-text-stroke:1px_black] border-2 border-black "
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}
