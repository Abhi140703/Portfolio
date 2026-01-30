import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import api from "../api/api";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    api.get(`/api/projects/${id}`).then((res) => {
      setProject(res.data);
    });
  }, []);

  if (!project) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div
      className="
    [-webkit-text-stroke:1px_black] bg-[#ffbb02] mt-20 mb-20 border-2  border-black max-w-4xl mx-auto px-6 py-20"
    >
      <Link
        to="/"
        className="
    fixed
    top-6
    left-6
    z-50
    text-[#ffbb02]
    font-semibold
    hover:underline text-2xl
  "
      >
        ← Back to Home
      </Link>

      {project.image && (
        <img
          src={`${import.meta.env.VITE_API_URL}/uploads/${project.image}`}
          alt={project.title}
          className="w-full h-96 object-cover rounded-xl mb-6 border-2 border-black"
        />
      )}

      <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>

      <p className="text-gray-700 leading-7 text-lg">{project.description}</p>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-white hover:bg-black hover:text-ffbb02 text-[#ffbb02] text-xl px-6 py-3 rounded-xl font-bold hover:-translate-y-1 transition border-2 border-black 
    [-webkit-text-stroke:1px_black]"
        >
          Visit Project →
        </a>
      )}
    </div>
  );
}
