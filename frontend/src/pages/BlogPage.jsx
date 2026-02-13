import { useParams, Link } from "react-router-dom";
import api from "../api/api";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await api.get(`/api/blogs/slug/${slug}`);
      setBlog(res.data);
    })();
  }, [slug]);

  if (!blog) {
    return (
      <p className="text-center py-24 text-gray-500">
        Loading article…
      </p>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-6 pt-16 pb-28">
      {/* BACK */}
      <Link
        to="/blogs"
        className="inline-block mb-6 text-[#ffbb02] font-semibold hover:underline"
      >
        ← Back to Blogs
      </Link>

      {/* CATEGORY */}
      <p className="text-sm text-[#ffbb02] font-medium mb-2">
        {blog.category}
      </p>

      {/* TITLE */}
      <h1 className="text-4xl font-bold leading-tight mb-4">
        {blog.title}
      </h1>

      {/* META */}
      <p className="text-gray-500 mb-8">
        {new Date(blog.createdAt).toDateString()}
      </p>

      {/* IMAGE */}
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[360px] object-cover rounded-2xl mb-10"
        />
      )}

      {/* CONTENT */}
      <div
        className="prose prose-lg max-w-none prose-headings:font-semibold prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  );
}
