import { Link } from "react-router-dom";
import profile from "../assets/profile.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white px-6 md:px-20 pt-10 pb-20"
    >
      <Link
        to="/"
        className="inline-block mb-6 text-xl  text-[#ffbb02] font-bold hover:underline "
        style={{ WebkitTextStroke: "1px black" }}
      >
        ← Back to Home
      </Link>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT : IMAGE */}

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-[#ffbb02] rounded-2xl -z-10"></div>
            <img
              src={profile}
              alt="Abhishek Dungdung"
              className="w-[320px] rounded-2xl object-cover border-2 border-black"
            />
          </div>
        </div>

        {/* RIGHT : CONTENT */}
        <div>
          <p
            className="text-[#ffbb02] text-2xl font-bold tracking-wide mb-6"
            style={{ WebkitTextStroke: "1px black" }}
          >
            ABOUT ME
          </p>

          <h2 className="text-4xl font-bold leading-tight mb-6">
            I’m Abhishek Dungdung, <br />a MERN Stack Developer
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            I am a passionate full-stack developer focused on building
            responsive, scalable, and user-friendly web applications using
            MongoDB, Express, React, and Node.js.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            I enjoy turning complex problems into simple, beautiful solutions.
            Currently, I am working on improving my skills in backend
            development, APIs, and modern UI/UX design.
          </p>

          {/* INFO GRID */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <p>
              <span className="font-semibold">Name:</span> Abhishek Dungdung
            </p>
            <p>
              <span className="font-semibold">Role:</span> MERN Developer
            </p>
            <p>
              <span className="font-semibold">Experience:</span> Fresher
            </p>
            <p>
              <span className="font-semibold">Location:</span> India
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <a
              href="/resume.pdf"
              className="bg-[#ffbb02] px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 transition border-black border-2"
            >
              Download CV
            </a>

            <Link
              to="/contact"
              className="border-2 border-black px-6 py-3 rounded-xl font-semibold hover:-translate-y-1 transition bg-[#EF4444]"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
