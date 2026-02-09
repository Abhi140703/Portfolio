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
          <div
            key={p._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
          >
            {/* IMAGE */}
            {p.image ? (
              <SafeImage
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}

            {/* CONTENT */}
            <div className="p-5">
              <h2 className="text-xl font-semibold">{p.title}</h2>

              <p className="text-gray-600 mt-2 line-clamp-3">{p.description}</p>

              <Link
                to={`/projects/${p._id}`}
                className="
   text-xl inline-block mt-4 px-5 py-2 rounded-full font-bold
    bg-[#ffbb02] text-white border-2 border-black
    [-webkit-text-stroke:1px_black]
    hover:[-webkit-text-stroke:0px_transparent]
    hover:bg-black hover:text-[#ffbb02]
    transition
  "
              >
                View Details →
              </Link>
            </div>
          </div>
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
