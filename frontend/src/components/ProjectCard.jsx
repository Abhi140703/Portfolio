import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";

export default function ProjectCard({
  id,
  title,
  description,
  image,
  reverse = false,
}) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* TEXT */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>

        <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>

        <Link
          to={`/projects/${id}`}
          className="w-fit border border-black px-5 py-2 rounded-full hover:bg-[#ffbb02] hover:text-white transition"
        >
          View Project →
        </Link>
      </div>

      {/* IMAGE */}
      <div className="md:w-1/2 h-64 md:h-auto">
        <SafeImage
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
