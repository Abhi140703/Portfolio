export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Git",
    "Redux",
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 mt-0 "
      style={{ WebkitTextStroke: "1px black" }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-4xl font-bold text-gray-700 lg:text-white mb-12"
          style={{ WebkitTextStroke: "2px black" }}
        >
          My <span className="text-[#ffbb02]">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg py-4 rounded-xl font-semibold 
                text-gray-700 hover:bg-[#ffbb02] hover:text-white transition cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
