import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = projects.length;
  if (!projects || total === 0) return null;

  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  // AUTO PLAY
  useEffect(() => {
    if (paused || total <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3500);

    return () => clearInterval(interval);
  }, [paused, total]);

  return (
    <div
      className="relative w-full h-[420px] flex items-center justify-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* PREV */}
      <Motion.div
        className="absolute left-[2%] sm:left-[4%] w-[180px] sm:w-[240px] opacity-60"
        animate={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <ProjectCard project={projects[prevIndex]} />
      </Motion.div>

      {/* MAIN */}
      <Motion.div
        className="absolute w-[240px] sm:w-[320px] z-10"
        drag="x"
        dragConstraints={{ left: -120, right: 120 }}
        dragElastic={0.15}
        onDragStart={() => setPaused(true)}
        onDragEnd={(e, info) => {
          setPaused(false);

          if (info.offset.x < -60) {
            setActiveIndex((prev) => (prev + 1) % total);
          }
          if (info.offset.x > 60) {
            setActiveIndex((prev) =>
              (prev - 1 + total) % total
            );
          }
        }}
        animate={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 140 }}
      >
        <ProjectCard project={projects[activeIndex]} />
      </Motion.div>

      {/* NEXT */}
      <Motion.div
        className="absolute right-[2%] sm:right-[4%] w-[180px] sm:w-[240px] opacity-60"
        animate={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <ProjectCard project={projects[nextIndex]} />
      </Motion.div>

      {/* PREV BUTTON */}
      <button
        onClick={() =>
          setActiveIndex((prev) => (prev - 1 + total) % total)
        }
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2
        bg-[#ffbb02] text-black px-3 py-2 rounded-full border-2 border-black"
      >
        ←
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={() =>
          setActiveIndex((prev) => (prev + 1) % total)
        }
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2
        bg-[#ffbb02] text-black px-3 py-2 rounded-full border-2 border-black"
      >
        →
      </button>
    </div>
  );
}
