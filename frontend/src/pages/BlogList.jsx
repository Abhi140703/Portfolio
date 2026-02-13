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
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-28">
      {/* BACK */}
      <Link
        to="/"
        className="inline-block mb-8 text-primary font-semibold hover:underline"
      >
        ← Back to Home
      </Link>

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-dark mb-14">
        All Articles
      </h1>

      {/* BLOG LIST */}
      <div className="space-y-14">
        {blogs.map((blog) => (
          <article
            key={blog._id}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            {/* IMAGE */}
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full md:w-60 h-40 object-cover rounded-xl"
              />
            )}

            {/* CONTENT */}
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wide text-primary font-semibold mb-2">
                {blog.category}
              </p>

              <h2 className="text-2xl font-semibold text-dark mb-3">
                {blog.title}
              </h2>

              <p className="text-gray-600 leading-relaxed line-clamp-3">
                {stripHtml(blog.content)}
              </p>

              <Link
                to={`/blogs/${blog.slug}`}
                className="inline-flex items-center gap-1 mt-4
                           text-primary font-semibold hover:underline"
              >
                Read article →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* Utility */
function stripHtml(html = "") {
  return html.replace(/<[^>]*>?/gm, "");
}
