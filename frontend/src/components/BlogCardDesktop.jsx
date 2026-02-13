import { Link } from "react-router-dom";

export default function BlogCardDesktop({ blog }) {
  if (!blog) return null;

  return (
    <div className="flex max-w-6xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
      {/* IMAGE */}
      <div className="w-3/5 h-[280px] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="w-2/5 p-8 flex flex-col justify-between">
        <div>
          {/* CATEGORY */}
          <p className="text-sm text-primary font-medium mb-2">
            {blog.category}
          </p>

          {/* TITLE */}
          <h3 className="text-2xl font-semibold text-dark leading-snug mb-4">
            {blog.title}
          </h3>

          {/* EXCERPT */}
          <p className="text-gray-600 leading-relaxed line-clamp-4">
            {stripHtml(blog.content)}
          </p>
        </div>

        {/* CTA */}
        <Link
          to={`/blogs/${blog.slug}`}
          className="mt-6 inline-flex items-center gap-2
                     text-primary font-semibold
                     hover:text-accent transition"
        >
          Read article →
        </Link>
      </div>
    </div>
  );
}

/* Utility */
function stripHtml(html = "") {
  return html.replace(/<[^>]*>?/gm, "");
}
