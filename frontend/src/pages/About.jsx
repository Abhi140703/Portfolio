import { Link } from "react-router-dom";
import profile from "../assets/profile.jpeg";

export default function About() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* BACK */}
        <Link
          to="/"
          className="inline-block mb-10 text-primary font-semibold hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 bg-primary rounded-2xl -z-10 opacity-90" />
              <img
                src={profile}
                alt="Abhishek Dungdung"
                className="w-[300px] rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
              About Me
            </p>

            <h2 className="text-4xl tracking-tight font-bold text-dark leading-tight mb-6">
              I’m Abhishek Dungdung, <br /> a Full-Stack MERN Developer
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              I’m a passionate full-stack developer focused on building modern,
              scalable, and user-friendly web applications using MongoDB,
              Express, React, and Node.js.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              I enjoy turning complex problems into simple, elegant solutions.
Currently, I’m strengthening my backend skills, API design,
and modern UI/UX practices.

            </p>

            {/* INFO GRID */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm mb-10">
              <p>
                <span className="font-semibold text-dark">Name:</span> Abhishek
                Dungdung
              </p>
              <p>
                <span className="font-semibold text-dark">Role:</span> MERN
                Developer
              </p>
              <p>
                <span className="font-semibold text-dark">Experience:</span> Entry-level

              </p>
              <p>
                <span className="font-semibold text-dark">Location:</span> India
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-4">
              <a
                href="/resume.pdf"
                className="
                  px-6 py-3 rounded-lg font-semibold
                  bg-primary text-white
                  hover:bg-dark transition
                "
              >
                Download CV
              </a>

              <Link
                to="/contact"
                className="
                  px-6 py-3 rounded-lg font-semibold
                  border border-dark text-dark
                  hover:bg-dark hover:text-white transition
                "
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
