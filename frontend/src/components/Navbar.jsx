import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const handleScroll = (id) => {
  setActive(id); 

  setTimeout(() => {
    setOpen(false); 
  }, 350);

  setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }, 400);
};


  const navClass = (id) =>
    `cursor-pointer relative transition-all duration-300 ease-out
   ${active === id ? "text-red-500 scale-110" : "text-black"}
   lg:hover:text-red-500`;

  return (
    <nav className="w-full fixed top-0 left-0 bg-transparent z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-6">
        {/* Logo / Name */}
        <Link
          to="/"
          className="lg:text-3xl text-xl text-gray-700 font-bold tracking-wide"
        >
          Abhishek DungDung
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-xl text-black font-medium">
          <li>
            <Link to="/about" className="lg:hover:text-red-500">
              About Me
            </Link>
          </li>

          <li
            className={navClass("skills")}
            onClick={() => handleScroll("skills")}
          >
            <span className="relative">
              skills
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300
      ${active === "skills" ? "w-full" : "w-0"}`}
              />
            </span>
          </li>

          <li
            className={navClass("projects")}
            onClick={() => handleScroll("projects")}
          >
            <span className="relative">
              Projects
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300
      ${active === "projects" ? "w-full" : "w-0"}`}
              />
            </span>
          </li>

          <li
            className={navClass("blogs")}
            onClick={() => handleScroll("blogs")}
          >
            <span className="relative">
              Blogs
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300
      ${active === "blogs" ? "w-full" : "w-0"}`}
              />
            </span>
          </li>

          <li
            className={navClass("contact")}
            onClick={() => handleScroll("contact")}
          >
            <span className="relative">
              Contact
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300
      ${active === "contact" ? "w-full" : "w-0"}`}
              />
            </span>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden bg-white shadow text-xl font-medium p-6 space-y-6 text-center transition-opacity duration-200">
          <li>
            <Link to="/about" className="lg:hover:text-red-500">
              About Me
            </Link>
          </li>

          <li
            className={navClass("skills")}
            onClick={() => handleScroll("skills")}
          >
            <span className="relative">
              Skills
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300
      ${active === "skills" ? "w-full" : "w-0"}`}
              />
            </span>
          </li>

          <li
            className={navClass("projects")}
            onClick={() => handleScroll("projects")}
          >
            <span className="relative">
              Projects
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300
      ${active === "projects" ? "w-full" : "w-0"}`}
              />
            </span>
          </li>

          <li
            className={navClass("blogs")}
            onClick={() => handleScroll("blogs")}
          >
            <span className="relative">
              Blogs
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300
      ${active === "blogs" ? "w-full" : "w-0"}`}
              />
            </span>
          </li>

          <li
            className={navClass("contact")}
            onClick={() => handleScroll("contact")}
          >
            <span className="relative">
              Contact
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300
      ${active === "contact" ? "w-full" : "w-0"}`}
              />
            </span>
          </li>
        </ul>
      )}
    </nav>
  );
}
