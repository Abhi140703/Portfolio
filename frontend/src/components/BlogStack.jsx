import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import BlogCard from "./BlogCard";

export default function BlogStack({ blogs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!blogs || blogs.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % blogs.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [blogs]);

  if (!blogs || blogs.length === 0) return null;

  return (
    <div className="relative w-full min-h-[560px] flex items-center justify-center">
      {blogs.map((blog, index) => {
        const position = (index - activeIndex + blogs.length) % blogs.length;

        // show only top 3 cards
        if (position > 2) return null;

        return (
          <Motion.div
            key={blog._id || index}
            className="absolute w-[340px]"
            initial={{
              y: 40,
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              y: position * 18,
              scale: 1 - position * 0.06,
              opacity: position === 0 ? 1 : 0.6,
              zIndex: 10 - position,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
          >
            <BlogCard blog={blog} />
          </Motion.div>
        );
      })}
    </div>
  );
}
