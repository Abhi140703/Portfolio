import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
        <ul
          className="hidden md:flex gap-10 text-xl text-black font-medium"
     
        >
          <li>
            <Link to="/about" className="lg:hover:text-red-500">
              About Me
            </Link>
          </li>

          <li>
            <a href="#skills" className="lg:hover:text-red-500">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="lg:hover:text-red-500">
              Projects
            </a>
          </li>

          {/* FIXED HERE */}
          <li>
            <a href="#blogs" className="lg:hover:text-red-500">
              Blogs
            </a>
          </li>

          <li>
            <a href="#contact" className="lg:hover:text-red-500">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu button */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul
          className="md:hidden bg-white shadow text-xl text-black  font-medium p-6 space-y-6 text-center"
          
        >
          <li>
            <Link to="/about" className="hover:text-red-600">
              About Me
            </Link>
          </li>

          <li>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
          </li>

          {/* FIXED HERE ALSO */}
          <li>
            <a href="#blogs" onClick={() => setOpen(false)}>
              Blogs
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
