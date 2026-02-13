    import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await api.get("/api/blogs");
      setBlogs(res.data);
    })();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
      {/* BACK */}
      <Link
        to="/"
        className="inline-block mb-8 text-[#ffbb02] font-semibold hover:underline"
      >
        ← Back to Home
      </Link>

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-[#ffbb02] mb-12">
        All Blogs
      </h1>

      {/* BLOG LIST */}
      <div className="space-y-12">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            {/* IMAGE */}
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full md:w-56 h-40 object-cover rounded-xl"
              />
            )}

            {/* CONTENT */}
            <div className="flex-1">
              <p className="text-sm text-[#ffbb02] font-medium mb-1">
                {blog.category}
              </p>

              <h2 className="text-2xl font-semibold mb-3">
                {blog.title}
              </h2>

              <p className="text-gray-700 leading-relaxed line-clamp-3">
                {stripHtml(blog.content)}
              </p>

              <Link
                to={`/blogs/${blog.slug}`}
                className="inline-block mt-4 text-[#ffbb02] font-semibold"
              >
                Read article →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Utility */
function stripHtml(html) {
  return html.replace(/<[^>]*>?/gm, "");
}
