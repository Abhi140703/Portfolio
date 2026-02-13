import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  if (!blog) return null;

  return (
    <article
      className="
        bg-white rounded-2xl overflow-hidden
        shadow-lg border border-black/10
        transition-transform duration-300
      "
    >
      {/* IMAGE */}
      {blog.image && (
        <div className="w-full h-[180px] overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="p-5 flex flex-col gap-2">
        <p className="text-xs font-semibold tracking-wide text-[#ffbb02]">
          {blog.category}
        </p>

        <h3 className="text-lg font-bold leading-snug text-gray-800">
          {blog.title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {stripHtml(blog.content)}
        </p>

        <Link
          to={`/blogs/${blog.slug}`}
          className="
            mt-3 inline-flex items-center gap-1
            text-sm font-semibold text-[#ffbb02]
            hover:underline
          "
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}

/* Utility */
function stripHtml(html = "") {
  return html.replace(/<[^>]*>?/gm, "");
}
