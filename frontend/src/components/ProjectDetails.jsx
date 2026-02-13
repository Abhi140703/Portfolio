import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/api";
import SafeImage from "../components/SafeImage";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    api.get(`/api/projects/${id}`).then((res) => {
      setProject(res.data);
    });
  }, [id]);

  if (!project) {
    return (
      <p className="text-center mt-24 text-gray-500">
        Loading project…
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-24 bg-bg">
      {/* BACK */}
      <Link
        to="/"
        className="
          fixed top-6 left-6 z-50
          text-primary font-semibold text-lg
          hover:underline
        "
      >
        ← Back to Home
      </Link>

      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {project.image && (
          <SafeImage
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
        )}

        <div className="p-8">
          <h1 className="text-4xl font-bold text-dark mb-4">
            {project.title}
          </h1>

          <p className="text-gray-700 leading-7 text-lg">
            {project.description}
          </p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block mt-8
                px-6 py-3
                rounded-xl
                font-semibold
                border
                border-primary
                text-primary
                hover:bg-primary
                hover:text-dark
                transition
              "
            >
              Visit Project →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
