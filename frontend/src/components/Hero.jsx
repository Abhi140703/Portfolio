import { Link } from "react-router-dom";
import profile from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 lg:px-20 lg:py-40 py-24 bg-bg">
      {/* MOBILE BACKGROUND */}
      <div className="absolute inset-0 bg-primary lg:hidden z-0" />

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left text-dark">
          <p className="text-sm lg:text-lg font-semibold tracking-widest text-accent mb-3">
            MERN STACK DEVELOPER
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Hello, my name <br /> is Abhishek DungDung
          </h1>

          <p className="mt-6 text-lg text-accent max-lg:hidden">
            I build modern full-stack web applications using MongoDB, Express,
            React, and Node.js.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">
          {/* DESKTOP ACCENT CIRCLE */}
          <div
            className="
              hidden lg:block absolute
              bg-primary rounded-full
              w-[950px] h-[950px]
              right-[-420px] top-[-420px]
            "
          />

          <img
            src={profile}
            alt="Profile"
            className="
              relative z-10 
              w-[220px] sm:w-[260px]
              lg:absolute lg:w-[460px]
              lg:right-[-120px] lg:top-1/2
              lg:-translate-y-1/2
              rounded-xl shadow-xl
            "
          />
        </div>

        {/* MOBILE DESCRIPTION */}
        <p className="lg:hidden text-center text-dark -mt-6">
          I build modern full-stack web applications using MongoDB, Express,
          React, and Node.js.
        </p>

        {/* BUTTONS */}
        <div
          className="
            grid grid-cols-2 gap-4
            max-w-md mx-auto
            lg:mx-0 lg:flex lg:gap-6
          "
        >
          <Link
            to="/projects"
            className="
              px-6 py-3 rounded-xl font-bold text-center
              bg-white text-dark
              lg:bg-primary lg:text-white
              hover:-translate-y-1 transition
            "
          >
            Projects
          </Link>

          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3 rounded-xl font-semibold text-center
              bg-[#0A66C2] text-white
              hover:-translate-y-1 transition
            "
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Abhi140703"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3 rounded-xl font-semibold text-center
              bg-dark text-white
              hover:-translate-y-1 transition
            "
          >
            GitHub
          </a>

          <a
            href="/resume.pdf"
            className="
              px-6 py-3 rounded-xl font-bold text-center whitespace-nowrap
              bg-white text-dark
              lg:bg-accent lg:text-white
              hover:-translate-y-1 transition
            "
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
