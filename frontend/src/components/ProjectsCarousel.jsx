import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  /* AUTO ROTATE (PAUSE ON INTERACTION) */
  useEffect(() => {
    if (isInteracting || !projects || projects.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [projects?.length, isInteracting]);

  if (!projects || projects.length === 0) return null;

  return (
    <div
      className="relative w-full h-[420px] flex items-center justify-center overflow-hidden"
      onWheel={(e) => {
        setIsInteracting(true);
        setHasInteracted(true);

        if (e.deltaY > 30) {
          setActiveIndex((prev) => (prev + 1) % projects.length);
        } else if (e.deltaY < -30) {
          setActiveIndex(
            (prev) => (prev - 1 + projects.length) % projects.length
          );
        }

        setTimeout(() => setIsInteracting(false), 600);
      }}
    >
      {projects.map((project, index) => {
        const offset = index - activeIndex;
        if (Math.abs(offset) > 2) return null;

        return (
          <Motion.div
            key={project._id || index}
            className="absolute w-[300px]"
            drag="x"
            dragConstraints={{ left: -80, right: 80 }}
            dragElastic={0.15}
            onDragStart={() => {
              setIsInteracting(true);
              setHasInteracted(true);
            }}
            onDragEnd={(e, info) => {
              setIsInteracting(false);

              if (info.offset.x < -50) {
                setActiveIndex((prev) => (prev + 1) % projects.length);
              }

              if (info.offset.x > 50) {
                setActiveIndex(
                  (prev) => (prev - 1 + projects.length) % projects.length
                );
              }
            }}
            animate={{
              x: offset * 340,
              scale: offset === 0 ? 1.12 : 0.9,
              opacity: offset === 0 ? 1 : 0.6,
              zIndex: 10 - Math.abs(offset),
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

      {/* LEFT ARROW */}
      <button
        onClick={() => {
          setHasInteracted(true);
          setActiveIndex(
            (prev) => (prev - 1 + projects.length) % projects.length
          );
        }}
        className="
          hidden md:flex items-center justify-center
          absolute left-3 top-1/2 -translate-y-1/2
          w-12 h-12 rounded-full
          bg-white shadow-lg
          text-4xl font-bold text-primary
          hover:scale-110 hover:shadow-xl transition
        "
      >
        ←
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => {
          setHasInteracted(true);
          setActiveIndex((prev) => (prev + 1) % projects.length);
        }}
        className="
          hidden md:flex items-center justify-center
          absolute right-3 top-1/2 -translate-y-1/2
          w-12 h-12 rounded-full
          bg-white shadow-lg
          text-4xl font-bold text-primary
          hover:scale-110 hover:shadow-xl transition
        "
      >
        →
      </button>

      {/* SCROLL / SWIPE INSTRUCTION */}
      {!hasInteracted && (
        <p
          className="
            absolute bottom-6 z-20
            text-xs text-primary opacity-80
            flex items-center gap-2
            animate-pulse
            pointer-events-none
          "
        >
          <span className="text-lg">←</span>
          Scroll or swipe to explore projects
          <span className="text-lg">→</span>
        </p>
      )}
    </div>
  );
}
