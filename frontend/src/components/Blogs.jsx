import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import ArcReactorLoader from "./ArcReactorLoader";
import BlogCardDesktop from "./BlogCardDesktop";
import BlogStack from "./BlogStack";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await api.get("/api/blogs/latest");
      setBlogs(res.data);
      setLoading(false);
    })();
  }, []);

  return (
    <section id="blogs" className="pt-24 pb-12 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-dark">
            Latest Blogs
          </h2>

          <Link
            to="/blogs"
            className="text-primary text-lg font-semibold hover:underline"
          >
            View all →
          </Link>
        </div>

        {/* CONTENT */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[320px]">
            <ArcReactorLoader text="Loading blogs..." />
          </div>
        ) : (
          <>
            {/* DESKTOP FEATURED BLOG */}
            <div className="hidden md:block relative">
              {blogs[activeIndex] && (
                <BlogCardDesktop blog={blogs[activeIndex]} />
              )}

              {/* LEFT ARROW */}
              {activeIndex > 0 && (
                <button
                  onClick={() => setActiveIndex(activeIndex - 1)}
                  className="
                    absolute left-[-60px] top-1/2 -translate-y-1/2
                    w-12 h-12 rounded-full
                    bg-white shadow-lg
                    text-4xl font-bold text-primary
                    hover:scale-110 hover:shadow-xl transition
                  "
                >
                  ←
                </button>
              )}

              {/* RIGHT ARROW */}
              {activeIndex < blogs.length - 1 && (
                <button
                  onClick={() => setActiveIndex(activeIndex + 1)}
                  className="
                    absolute right-[-60px] top-1/2 -translate-y-1/2
                    w-12 h-12 rounded-full
                    bg-white shadow-lg
                    text-4xl font-bold text-primary
                    hover:scale-110 hover:shadow-xl transition
                  "
                >
                  →
                </button>
              )}
            </div>

            {/* MOBILE STACK */}
            <div className="md:hidden">
              <BlogStack blogs={blogs.slice(0, 3)} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
