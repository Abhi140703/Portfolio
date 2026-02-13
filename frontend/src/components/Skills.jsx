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
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-dark mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
         <div
  key={skill}
  className="
    bg-white
    border border-gray-200
    py-4 rounded-xl
    font-medium text-gray-700
    shadow-sm
    hover:-translate-y-1
    hover:shadow-md
    hover:border-primary
    hover:text-primary
    transition
  "
>
  {skill}
</div>

          ))}
        </div>
      </div>
    </section>
  );
}
