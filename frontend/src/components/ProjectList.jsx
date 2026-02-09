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
    <div className="max-w-6xl mx-auto px-6 py-20">
      <Link
        to="/"
        className="inline-block mb-4 text-xl text-[#ffbb02] font-bold hover:underline "
        style={{ WebkitTextStroke: "1px black" }}
      >
        ← Back to Home
      </Link>
      <h1
        className="text-4xl font-bold text-[#ffbb02] mb-10 text-center"
        style={{ WebkitTextStroke: "2px black" }}
      >
        All Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="inline-block mt-4 bg-[#ffbb02] text-white px-4 py-2 rounded-lg hover:bg-black     [-webkit-text-stroke:1px_black]
    hover:[-webkit-text-stroke:0px_transparent] hover:text-[#ffbb02] transition border-2 font-bold border-black"
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
