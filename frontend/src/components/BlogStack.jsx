import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import BlogCard from "./BlogCard";

export default function BlogStack({ blogs }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  // Auto rotation (pauses on interaction)
  useEffect(() => {
    if (!blogs || blogs.length <= 1 || isInteracting) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % blogs.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [blogs?.length, isInteracting]);

  if (!blogs || blogs.length === 0) return null;

  return (
    <div
      className="relative w-full min-h-[560px] flex flex-col items-center justify-center"
      onWheel={(e) => {
        setIsInteracting(true);

        if (e.deltaY > 30) {
          setActiveIndex((prev) => (prev + 1) % blogs.length);
        } else if (e.deltaY < -30) {
          setActiveIndex((prev) =>
            (prev - 1 + blogs.length) % blogs.length
          );
        }

        setTimeout(() => setIsInteracting(false), 600);
      }}
    >
      {/* STACK */}
      <div className="relative w-full flex items-center justify-center m-16">
        {blogs.map((blog, index) => {
          const position =
            (index - activeIndex + blogs.length) % blogs.length;

          // show only top 3 cards
          if (position > 2) return null;

          return (
            <Motion.div
              key={blog._id || index}
              className="absolute w-[340px]"
              drag={position === 0 ? "y" : false}
              dragConstraints={{ top: -80, bottom: 80 }}
              dragElastic={0.15}
              onDragStart={() => setIsInteracting(true)}
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

   <p className="text-xs text-[#ffbb02] mt-2 text-center opacity-80">
  Drag or scroll to explore blogs
</p>

    </div>
  );
}
