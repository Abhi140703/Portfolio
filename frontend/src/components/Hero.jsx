import { Link } from "react-router-dom";
import profile from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 lg:px-20 py-24">
      {/* MOBILE YELLOW BACKGROUND (TEXT + IMAGE + BUTTONS) */}
      <div
        className="
          absolute
          inset-0
          bg-[#ffbb02]
          lg:hidden
          z-0
        "
      />

      {/* GRID LAYOUT */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <div
          className="text-center lg:text-left text-white"
          style={{ WebkitTextStroke: "1px black" }}
        >
          <p className="text-black text-xl lg:text-[#ffbb02] font-semibold tracking-wide mb-3">
            MERN STACK DEVELOPER
          </p>

          <h1
            className="text-4xl sm:text-5xl text-gray-700 font-bold lg:text-white leading-tight"
            style={{ WebkitTextStroke: "2px black" }}
          >
            Hello, my name <br /> is Abhishek DungDung
          </h1>

          {/* DESCRIPTION (DESKTOP ONLY HERE) */}
          <p className="text-gray-700 lg:text-gray-600 mt-6 max-lg:hidden">
            I build modern full-stack web applications using MongoDB, Express,
            React, and Node.js.
          </p>
        </div>

        {/* RIGHT IMAGE + DESKTOP BG */}
        <div className="relative flex justify-center items-center">
          {/* DESKTOP YELLOW CIRCLE */}
          <div
            className="
              hidden lg:block
              absolute
              bg-[#ffbb02]
              rounded-full
              w-[1050px] h-[950px]
              right-[-425px]
              top-[-450px]
            "
          />

          {/* IMAGE */}
          <img
            src={profile}
            alt="profile"
            className="
              relative
              w-[200px]
              sm:w-[240px]
              -mt-20

              lg:absolute
              lg:right-[-100px]
              lg:top-[115px]
              lg:-translate-y-1/2
              lg:w-[460px]

              z-10
            "
          />
        </div>

        {/* MOBILE DESCRIPTION */}
        <p className="text-gray-700 text-center lg:hidden -mt-6">
          I build modern full-stack web applications using MongoDB, Express,
          React, and Node.js.
        </p>

        {/* BUTTONS */}
        <div
          className="
            mt-0
            grid grid-cols-2 gap-4
            max-w-md
            mx-auto lg:mx-0
            lg:flex lg:gap-6
          "
        >
          <Link
            to="/projects"
            className="
              px-6 py-3 rounded-xl font-bold text-center
              bg-white text-black
              lg:bg-[#ffbb02] lg:text-white
              hover:-translate-y-1 transition border-2 border-black
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
              hover:-translate-y-1 transition border-2 border-black
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
              bg-[#24292F] text-white
              hover:-translate-y-1 transition border-2 border-[#ffbb02]
            "
          >
            Github
          </a>

          <a
            href="/resume.pdf"
            className="
              px-6 py-3 rounded-xl font-bold text-center whitespace-nowrap
              bg-white text-black
              lg:bg-[#EF4444]
              lg:text-white
              hover:-translate-y-1 transition border-2 border-black
            "
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
