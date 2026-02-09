import { useEffect, useState } from "react";
import api from "../api/api";

export default function BlogsAdmin() {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await api.get(`${import.meta.env.VITE_API_URL}/api/blogs`);
      setBlogs(res.data);
    } catch (err) {
      console.log("Error fetching blogs:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await api.delete(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchBlogs();
    } catch (err) {
      console.log("Delete error:", err.response?.data || err.message);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.put(
        `${import.meta.env.VITE_API_URL}/api/blogs/${editingBlog._id}`,
        editingBlog,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setEditingBlog(null);
      fetchBlogs();
    } catch (err) {
      console.log("Update error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-[#ffbb02]">Manage Blogs</h2>

      {blogs.length === 0 && <p className="text-gray-500">No blogs found.</p>}

      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="bg-white p-4 shadow-md rounded-lg mb-4 border"
        >
          <h3 className="text-xl font-semibold">{blog.title}</h3>
          <p className="text-gray-600">{blog.content}</p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => handleEdit(blog)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(blog._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {editingBlog && (
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Edit Blog</h3>

          <input
            type="text"
            value={editingBlog.title}
            onChange={(e) =>
              setEditingBlog({ ...editingBlog, title: e.target.value })
            }
            className="w-full p-2 border rounded mb-3"
          />

          <textarea
            value={editingBlog.content}
            onChange={(e) =>
              setEditingBlog({ ...editingBlog, content: e.target.value })
            }
            className="w-full p-2 border rounded mb-3"
            rows={5}
          />

          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
          >
            Update Blog
          </button>
        </div>
      )}
    </div>
  );
}
