import { useState } from "react";
import api from "../api/api";

export default function CreateBlog() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    slug: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", form.title);
    data.append("content", form.content);
    data.append("category", form.category);
    data.append("slug", form.slug);
    data.append("image", image);

    try {
      const token = localStorage.getItem("token");

      await api.post(`${import.meta.env.VITE_API_URL}/api/blogs`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Blog Created Successfully!");
      window.location.href = "/admin/blogs";
    } catch (err) {
      alert("Error Creating Blog");
      console.log(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-[#ffbb02] mb-6">
        Create New Blog
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow rounded-xl border"
      >
        <input
          name="title"
          placeholder="Blog Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          name="slug"
          placeholder="SEO Slug (example: my-first-blog)"
          value={form.slug}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          name="category"
          placeholder="Category (example: Tech, Life, Coding)"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        />

        <textarea
          name="content"
          placeholder="Blog Content"
          value={form.content}
          onChange={handleChange}
          rows="6"
          className="w-full p-2 border rounded mb-3"
          required
        ></textarea>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <button className="bg-[#ffbb02] text-white px-6 py-3 rounded-xl hover:bg-[#ffbb02]">
          Create Blog
        </button>
      </form>
    </div>
  );
}
