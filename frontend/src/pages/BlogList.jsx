import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import BlogStack from "../components/BlogStack";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get("/api/blogs").then((res) => {
      setBlogs(res.data);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#ffbb02] mb-10">
        Blogs
      </h1>

      {/* BLOG STACK ANIMATION */}
      <BlogStack blogs={blogs} />
    </div>
  );
}
