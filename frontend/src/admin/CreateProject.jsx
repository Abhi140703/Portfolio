import { useState } from "react";
import api from "../api/api";

export default function CreateProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("link", link);
    formData.append("image", image);

    try {
      await api.post(
        `${import.meta.env.VITE_API_URL}/api/projects`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      alert("✅ Project created successfully");

      // reset form
      setTitle("");
      setDescription("");
      setLink("");
      setImage(null);
    } catch (error) {
      alert("❌ Error creating project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-[#ffbb02] mb-6">
          Create New Project
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block mb-1 font-medium">Project Title</label>
            <input
              type="text"
              placeholder="Enter project title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffbb02]"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">
              Project Description
            </label>
            <textarea
              placeholder="Describe your project"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows="4"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffbb02]"
            />
          </div>

          {/* Link */}
          <div>
            <label className="block mb-1 font-medium">Project Link</label>
            <input
              type="url"
              placeholder="https://yourproject.com"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffbb02]"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-1 font-medium">Project Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full border rounded-lg px-3 py-2 bg-white"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#ffbb02] text-white py-3 rounded-lg font-semibold hover:bg-[#ffbb02] transition disabled:opacity-60"
          >
            {loading ? "Creating..." : "Create Project"}
          </button>
        </form>
      </div>
    </div>
  );
}
