import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get("/api/blogs").then((res) => {
      setBlogs(res.data);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#ffbb02] mb-10">Blogs</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <Link
            to={`/blog/${blog.slug}`}
            key={blog._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img src={blog.image} className="w-full h-48 object-cover" />

            <div className="p-4">
              <p className="text-[#ffbb02] text-sm">{blog.category}</p>

              <h2 className="text-xl font-semibold">{blog.title}</h2>

              <p className="text-gray-500 text-sm mt-2">
                {new Date(blog.createdAt).toDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
