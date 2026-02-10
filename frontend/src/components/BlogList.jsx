import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import BlogStack from "./BlogStack";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await api.get("/api/blogs");
    setBlogs(res.data);
  };

  return (
    <div className="[-webkit-text-stroke:1px_black] max-w-6xl mx-auto px-6 py-20 pt-10">
      <Link
        to="/"
        className="inline-block mb-4 text-[#ffbb02] font-bold hover:underline text-xl"
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-[#ffbb02] mb-10 text-center [-webkit-text-stroke:2px_black]">
        All Blogs
      </h1>

      {/* BLOG STACK */}
      <BlogStack blogs={blogs} />
    </div>
  );
}
