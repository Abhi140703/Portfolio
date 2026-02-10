import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import BlogCard from "./BlogCard";

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
    <div className="relative w-full h-[420px] flex items-center justify-center">
      {blogs.map((blog, index) => {
        const position = (index - activeIndex + blogs.length) % blogs.length;

        // show only top 3 cards
        if (position > 2) return null;

        return (
          <Motion.div
            key={blog._id || index}
            className="absolute w-[340px]"
            animate={{
              y: position * 14,
              scale: 1 - position * 0.05,
              opacity: position === 0 ? 1 : 0.7,
              zIndex: 10 - position,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
          >
            <BlogCard blog={blog} />
          </Motion.div>
        );
      })}
    </div>
  );
}
