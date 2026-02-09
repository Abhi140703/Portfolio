import { useParams } from "react-router-dom";
import api from "../api/api";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    api.get(`/api/blogs/slug/${slug}`).then((res) => setBlog(res.data));
  }, [slug]);

  if (!blog) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <img src={blog.image} className="w-full rounded-xl mb-6" />

      <p className="text-[#ffbb02]">{blog.category}</p>

      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      <p className="text-gray-500 mb-6">
        {new Date(blog.createdAt).toDateString()}
      </p>

      <div className="prose max-w-none">{blog.content}</div>
    </div>
  );
}
