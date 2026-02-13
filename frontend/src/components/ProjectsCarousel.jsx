import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {
    const onResize = () =>
      setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
}
export default function ProjectsCarousel({ projects }) {
  const isMobile = useIsMobile();
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
      className={`relative w-full ${
        isMobile ? "min-h-[520px]" : "h-[420px]"
      } flex items-center justify-center overflow-hidden`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onWheel={(e) => {
        setPaused(true);

        if (e.deltaY > 20) {
          setActiveIndex((prev) => (prev + 1) % projects.length);
        } else if (e.deltaY < -20) {
          setActiveIndex((prev) =>
            (prev - 1 + projects.length) % projects.length
          );
        }

        setTimeout(() => setPaused(false), 600);
      }}
    >
      {projects.map((project, index) => {
        const offset =
          (index - activeIndex + projects.length) % projects.length;

        // limit cards
        if (offset > (isMobile ? 2 : 2)) return null;

        return (
          <Motion.div
            key={project._id || index}
            className="absolute w-[300px]"
            drag={isMobile ? "y" : "x"}
            dragConstraints={
              isMobile
                ? { top: -80, bottom: 80 }
                : { left: -120, right: 120 }
            }
            dragElastic={0.15}
            onDragStart={() => setPaused(true)}
            onDragEnd={(e, info) => {
              setPaused(false);

              if (
                (isMobile && info.offset.y < -50) ||
                (!isMobile && info.offset.x < -50)
              ) {
                setActiveIndex((prev) =>
                  (prev + 1) % projects.length
                );
              }

              if (
                (isMobile && info.offset.y > 50) ||
                (!isMobile && info.offset.x > 50)
              ) {
                setActiveIndex((prev) =>
                  (prev - 1 + projects.length) % projects.length
                );
              }
            }}
            animate={
              isMobile
                ? {
                    y: offset * 24,
                    scale: 1 - offset * 0.07,
                    opacity: offset === 0 ? 1 : 0.6,
                    zIndex: 10 - offset,
                  }
                : {
                    x: offset * 340,
                    scale: offset === 0 ? 1.12 : 0.9,
                    opacity: offset === 0 ? 1 : 0.6,
                    zIndex: offset === 0 ? 10 : 5,
                  }
            }
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

