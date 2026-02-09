import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const res = await api.get(`${import.meta.env.VITE_API_URL}/api/projects`);
    setProjects(res.data);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    await api.delete(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    loadProjects();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#ffbb02] mb-6">
        Manage Projects
      </h1>

      <Link
        to="/admin/projects/create"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Create New Project
      </Link>

      {projects.map((p) => (
        <div key={p._id} className="p-4 mt-4 shadow rounded bg-white">
          <h2 className="text-xl font-semibold">{p.title}</h2>
          <p className="text-gray-600">{p.description}</p>

          <div className="mt-3 flex gap-4">
            <button
              onClick={() => handleDelete(p._id)}
              className="bg-red-600 text-white px-4 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
