import { Link } from "react-router-dom";

export default function BlogCardDesktop({ blog }) {
  return (
    <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-black">
      {/* LEFT: IMAGE */}
      <div className="w-2/3">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT: CONTENT */}
      <div className="w-1/3 p-6 flex flex-col justify-between">
        <div>
          <p className="text-sm text-[#ffbb02] font-semibold mb-2">
            {blog.category}
          </p>

          <h3 className="text-2xl font-bold mb-4">
            {blog.title}
          </h3>

          <p className="text-gray-600 line-clamp-5">
            {blog.content}
          </p>
        </div>

        <Link
          to={`/blogs/${blog.slug}`}
          className="mt-6 inline-block bg-[#ffbb02] text-black px-5 py-3 rounded-lg border-2 border-black text-center"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
