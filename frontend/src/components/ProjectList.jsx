import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import SafeImage from "../components/SafeImage";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/api/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 bg-bg">
      {/* BACK */}
      <Link
        to="/"
        className="inline-block mb-4 text-xl font-bold text-primary hover:underline"
      >
        ← Back to Home
      </Link>

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-primary mb-10 text-center">
        All Projects
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="
              bg-white
              rounded-xl
              overflow-hidden
              shadow-sm
              hover:shadow-xl
              transition
            "
          >
            {project.image && (
              <SafeImage
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-5">
              <h3 className="text-xl font-semibold text-dark">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-2 line-clamp-3">
                {project.description}
              </p>

              <Link
                to={`/projects/${project._id}`}
                className="
                  inline-block mt-4
                  px-4 py-2
                  rounded-lg
                  font-semibold
                  border
                  border-primary
                  text-primary
                  hover:bg-primary
                  hover:text-dark
                  transition
                "
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
