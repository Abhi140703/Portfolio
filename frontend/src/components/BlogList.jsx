import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await api.get("/api/blogs");
    setBlogs(res.data);
  };

  return (
    <div className="    max-w-6xl mx-auto px-6 py-20 pt-10">
      <Link
        to="/"
        className="inline-block mb-4 text-[#ffbb02] font-bold hover:underline text-xl "
      >
        ← Back to Home
      </Link>
      <h1
        className="text-4xl font-bold text-[#ffbb02] mb-10 text-center"
      >
        All Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-5">
              <h2 className="text-2xl font-semibold">
                <span className="text-white"></span>
                {blog.title}
              </h2>

              <p className="text-sm text-[#ffbb02] font-medium mt-1">
                <span className=" text-white"></span>
                {blog.category}
              </p>

              <p className="text-gray-600 mt-3 line-clamp-3">
                <span className=" text-white"></span>
                {blog.content}
              </p>

              <Link
                to={`/blogs/${blog.slug}`}
                className="inline-block mt-4 bg-[#ffbb02] text-white px-4 py-2 rounded-lg hover:bg-black hover:text-[#ffbb02] transition border-2 border-black 
    hover:[-webkit-text-stroke:0px_transparent]"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
