import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BlogStack({ blogs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (blogs.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % blogs.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [blogs.length]);

  return (
    <div className="relative w-full h-[440px] flex items-center justify-center">
      {blogs.map((blog, index) => {
        const position = (index - activeIndex + blogs.length) % blogs.length;

        // show only top 3 stacked cards
        if (position > 2) return null;

        return (
          <Motion.div
            key={blog._id}
            className="absolute w-[340px]"
            animate={{
              y: position * 16,
              scale: 1 - position * 0.06,
              opacity: position === 0 ? 1 : 0.7,
              zIndex: 10 - position,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
          >
            {/* BLOG CARD (your existing UI) */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden border-2 border-black">
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-5">
                <h2 className="text-2xl font-semibold">
                  {blog.title}
                </h2>

                <p className="text-sm text-[#ffbb02] font-medium mt-1">
                  {blog.category}
                </p>

                <p className="text-gray-600 mt-3 line-clamp-3">
                  {blog.content}
                </p>

                <Link
                  to={`/blogs/${blog.slug}`}
                  className="inline-block mt-4 bg-[#ffbb02] text-white px-4 py-2 rounded-lg 
                  hover:bg-black hover:text-[#ffbb02] transition border-2 border-black"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </Motion.div>
        );
      })}
    </div>
  );
}
