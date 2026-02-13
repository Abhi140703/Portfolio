import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const handleScroll = (id) => {
    setActive(id);

    setTimeout(() => setOpen(false), 300);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 350);
  };

  const navClass = (id) =>
    `cursor-pointer relative transition-all duration-300
     ${
       active === id
         ? "text-accent scale-110"
         : "text-dark"
     }
     hover:text-accent`;

  return (
    <nav className="w-full fixed top-0 left-0 bg-bg/90 backdrop-blur z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl lg:text-3xl font-bold tracking-wide text-dark"
        >
          Abhishek DungDung
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <li>
            <Link to="/about" className="text-dark hover:text-accent">
              About Me
            </Link>
          </li>

          {["skills", "projects", "blogs", "contact"].map((item) => (
            <li
              key={item}
              className={navClass(item)}
              onClick={() => handleScroll(item)}
            >
              <span className="relative capitalize">
                {item}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-accent transition-all duration-300
                    ${active === item ? "w-full" : "w-0"}`}
                />
              </span>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl text-dark"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <ul className="md:hidden bg-bg shadow-lg text-lg font-medium p-6 space-y-6 text-center">
          <li>
            <Link
              to="/about"
              className="text-dark hover:text-accent"
              onClick={() => setOpen(false)}
            >
              About Me
            </Link>
          </li>

          {["skills", "projects", "blogs", "contact"].map((item) => (
            <li
              key={item}
              className={navClass(item)}
              onClick={() => handleScroll(item)}
            >
              <span className="relative capitalize">
                {item}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] bg-accent transition-all duration-300
                    ${active === item ? "w-1/2" : "w-0"}`}
                />
              </span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
