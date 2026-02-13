import { Link } from "react-router-dom";

export default function BlogCardDesktop({ blog }) {
  return (
    <div className="flex max-w-6xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* IMAGE */}
      <div className="w-3/5 h-[280px] overflow-hidden rounded-1-2xl">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="w-2/5 p-8 flex flex-col justify-between">
        <div>
          <p className="text-sm text-[#ffbb02] font-medium mb-2">
            {blog.category}
          </p>

          <h3 className="text-2xl font-semibold leading-snug mb-4">
            {blog.title}
          </h3>

          <p className="text-gray-700 leading-relaxed line-clamp-4">
  {stripHtml(blog.content)}
</p>

        </div>

        <Link
          to={`/blogs/${blog.slug}`}
          className="mt-6 text-[#ffbb02] font-semibold"
        >
          Read article →
        </Link>
      </div>
    </div>
  );
}
function stripHtml(html) {
  return html.replace(/<[^>]*>?/gm, "");
}
