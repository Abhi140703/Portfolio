import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">
      {projects.map((project, index) => {
        const offset = index - activeIndex;

        return (
          <Motion.div
            key={project._id || index}
            className="absolute"
            animate={{
              x: offset * 320,
              scale: offset === 0 ? 1.1 : 0.9,
              zIndex: offset === 0 ? 10 : 5,
            }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 18,
            }}
          >
            <ProjectCard {...project} />
          </Motion.div>
        );
      })}
    </div>
  );
}
