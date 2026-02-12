import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  if (!blog) return null;

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden border-2 border-black">
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-5">
        <h3 className="text-2xl font-bold">{blog.title}</h3>

        <p className="text-[#ffbb02] text-sm mt-1">
          {blog.category}
        </p>

        <p className="mt-3 text-gray-600 line-clamp-3">
          {blog.content}
        </p>

        <Link
          to={`/blogs/${blog.slug}`}
          className="inline-block mt-4 bg-[#ffbb02] text-white px-4 py-2 rounded-lg 
          hover:bg-black transition hover:text-[#ffbb02] border-2 border-black"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
