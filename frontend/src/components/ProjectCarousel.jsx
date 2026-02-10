import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // AUTO LOOP
  useEffect(() => {
    if (paused || projects.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, projects.length]);

  return (
    <div
      className="relative w-full h-[420px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {projects.map((project, index) => {
        const offset = index - activeIndex;

        // hide far cards
        if (Math.abs(offset) > 2) return null;

        return (
          <Motion.div
            key={project._id || index}
            className="absolute w-[300px]"
            animate={{
              x: offset * 340,
              scale: offset === 0 ? 1.12 : 0.9,
              opacity: offset === 0 ? 1 : 0.6,
              zIndex: offset === 0 ? 10 : 5,
            }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 18,
            }}
          >
            <ProjectCard project={project} />
          </Motion.div>
        );
      })}
    </div>
  );
}
