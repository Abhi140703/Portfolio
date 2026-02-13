import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import ArcReactorLoader from "./ArcReactorLoader";
import BlogStack from "./BlogStack";
import BlogCardDesktop from "./BlogCardDesktop";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestBlogs();
  }, []);

  const fetchLatestBlogs = async () => {
    setLoading(true);
    const res = await api.get("/api/blogs/latest");
    setBlogs(res.data);
    setTimeout(() => setLoading(false), 400);
  };

  return (
    <section id="blogs" className="py-24 pb-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER ALWAYS VISIBLE */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold text-[#ffbb02]">
            Latest Blogs
          </h2>

          <Link
            to="/blogs"
            className="text-[#ffbb02] text-2xl font-bold hover:underline"
          >
            View All →
          </Link>
        </div>

        {/* CONTENT AREA */}
        {loading ? (
  <div className="flex justify-center font-bold items-center min-h-[400px]">
    <ArcReactorLoader text="Blogs are loading..." />
  </div>
) : (
  <>
   {/* DESKTOP */}
<div className="hidden md:flex flex-col gap-12 items-center">
  {blogs[0] && <BlogCardDesktop blog={blogs[0]} />}
  <BlogStack blogs={blogs} />
</div>

{/* MOBILE */}
<div className="md:hidden">
  <BlogStack blogs={blogs} />
</div>

  </>
)}

      </div>
    </section>
  );
}
