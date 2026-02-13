import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import BlogCard from "./BlogCard";

export default function BlogStack({ blogs = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  /* AUTO ROTATE (PAUSE ON INTERACTION) */
  useEffect(() => {
    if (blogs.length <= 1 || isInteracting) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % blogs.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [blogs.length, isInteracting]);

  if (!blogs.length) return null;

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center"
      onWheel={(e) => {
        setIsInteracting(true);
        setHasInteracted(true);

        if (e.deltaY > 30) {
          setActiveIndex((prev) => (prev + 1) % blogs.length);
        } else if (e.deltaY < -30) {
          setActiveIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
        }

        setTimeout(() => setIsInteracting(false), 500);
      }}
    >
      {/* STACK AREA */}
      <div className="relative w-full h-[360px] flex items-center justify-center">
        {blogs.map((blog, index) => {
          const position =
            (index - activeIndex + blogs.length) % blogs.length;

          if (position > 2) return null;

          return (
            <Motion.div
              key={blog._id || index}
              className="absolute w-[300px]"
              drag={position === 0 ? "y" : false}
              dragConstraints={{ top: -70, bottom: 70 }}
              dragElastic={0.15}
              onDragStart={() => {
                setIsInteracting(true);
                setHasInteracted(true);
              }}
              onDragEnd={(e, info) => {
                setIsInteracting(false);

                if (info.offset.y < -50) {
                  setActiveIndex((prev) => (prev + 1) % blogs.length);
                }

                if (info.offset.y > 50) {
                  setActiveIndex((prev) =>
                    (prev - 1 + blogs.length) % blogs.length
                  );
                }
              }}
              initial={{ y: 30, scale: 0.92, opacity: 0 }}
              animate={{
                y: position * 16,
                scale: position === 0 ? 1 : 0.94,
                opacity: position === 0 ? 1 : 0.6,
                zIndex: 10 - position,
              }}
              transition={{
                type: "spring",
                stiffness: 130,
                damping: 18,
              }}
            >
              <BlogCard blog={blog} />
            </Motion.div>
          );
        })}
      </div>

      {/* SCROLL HINT */}
      {!hasInteracted && (
        <p
          className="
            mt-6
            text-xs text-primary opacity-80
            flex items-center gap-2
            animate-pulse
            pointer-events-none
          "
        >
          <span className="text-base">↑</span>
          Scroll to explore blogs
          <span className="text-base">↓</span>
        </p>
      )}
    </div>
  );
}
