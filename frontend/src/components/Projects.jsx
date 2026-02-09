import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import SafeImage from "../components/SafeImage";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/api/projects").then((res) => {
      setProjects(res.data.slice(0, 3)); // Show only 3 latest
    });
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-[#ffbb02] mb-12">
        Latest Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
          >
            {project.image && (
              <SafeImage
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2 line-clamp-3">
                {project.description}
              </p>

              <Link
                to={`/projects/${project._id}`}
                className="inline-block mt-4 bg-[#ffbb02] text-white px-4 py-2 rounded-lg hover:bg-[#ffbb02] transition"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/projects"
          className="bg-[#ffbb02] text-white px-6 py-3 rounded-lg hover:bg-[#ffbb02] transition"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
