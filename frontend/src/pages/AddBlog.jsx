import { useState } from "react";
import api from "../api/api";

export default function AddBlog() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    content: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("category", form.category);
    formData.append("content", form.content);
    formData.append("image", image); // must be "image"

    try {
      setLoading(true);
      await api.post("/api/blogs", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Blog created successfully ✅");

      // reset
      setForm({ title: "", category: "", content: "" });
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Failed to create blog ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl bg-white p-6 rounded-xl shadow space-y-4"
    >
      <h2 className="text-2xl font-semibold">Create Blog</h2>

      <input
        name="title"
        placeholder="Blog title"
        value={form.title}
        onChange={handleChange}
        required
        className="w-full border px-4 py-2 rounded"
      />

      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        required
        className="w-full border px-4 py-2 rounded"
      />

      <textarea
        name="content"
        placeholder="Blog content (HTML supported)"
        value={form.content}
        onChange={handleChange}
        required
        rows={6}
        className="w-full border px-4 py-2 rounded"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="
          w-full py-2 rounded font-semibold
          bg-black text-white
          hover:bg-gray-800
          disabled:opacity-60
        "
      >
        {loading ? "Creating..." : "Create Blog"}
      </button>
    </form>
  );
}
