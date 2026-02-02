import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchLatestBlogs();
  }, []);

  const fetchLatestBlogs = async () => {
    const res = await api.get("/api/blogs/latest");
    setBlogs(res.data);
  };

  return (
    <section
      id="blogs"
      className="py-24 bg-gray-50 
    [-webkit-text-stroke:1px_black]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2
            className="
    [-webkit-text-stroke:2px_black] text-4xl font-bold text-[#ffbb02]"
          >
            Latest Blogs
          </h2>

          <Link
            to="/blogs"
            className="text-[#ffbb02] text-2xl font-bold hover:underline 
    [-webkit-text-stroke:2px_black]"
          >
            View All →
          </Link>
        </div>

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
                <h3 className="text-2xl font-bold">{blog.title}</h3>

                <p className="text-[#ffbb02] text-sm mt-1">{blog.category}</p>

                <p className="mt-3 text-gray-600 line-clamp-3">
                  {blog.content}
                </p>

                <Link
                  to={`/blogs/${blog.slug}`}
                  className="inline-block mt-4 bg-[#ffbb02] text-white px-4 py-2 rounded-lg hover:bg-black transition  hover:text-[#ffbb02] border-2 border-black   [-webkit-text-stroke:1px_black]
    hover:[-webkit-text-stroke:0px_transparent]"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
