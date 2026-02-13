import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import BlogCardDesktop from "./BlogCardDesktop";

export default function BlogStackDesktop({ blogs }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (!blogs || blogs.length <= 1 || isInteracting) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % blogs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [blogs, isInteracting]);

  if (!blogs || blogs.length === 0) return null;

  return (
    <div
      className="relative w-full h-[420px] flex items-center justify-center"
      onWheel={(e) => {
        setIsInteracting(true);

        if (e.deltaY > 20) {
          setActiveIndex((prev) => (prev + 1) % blogs.length);
        } else if (e.deltaY < -20) {
          setActiveIndex((prev) =>
            (prev - 1 + blogs.length) % blogs.length
          );
        }

        setTimeout(() => setIsInteracting(false), 600);
      }}
    >
      {blogs.map((blog, index) => {
        const position =
          (index - activeIndex + blogs.length) % blogs.length;

        if (position > 2) return null;

        return (
          <Motion.div
            key={blog._id || index}
            className="absolute w-full max-w-5xl"
            animate={{
              y: position * 22,
              scale: 1 - position * 0.04,
              opacity: position === 0 ? 1 : 0.65,
              zIndex: 10 - position,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
            }}
          >
            <BlogCardDesktop blog={blog} />
          </Motion.div>
        );
      })}
    </div>
  );
}
