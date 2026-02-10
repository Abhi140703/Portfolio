import { Link } from "react-router-dom";
import SafeImage from "../components/SafeImage";

export default function ProjectCard({ project }) {
  const { _id, title, description, image } = project;

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
      {image ? (
        <SafeImage
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          No Image
        </div>
      )}

      <div className="p-5">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2 line-clamp-3">{description}</p>

        <Link
          to={`/projects/${_id}`}
          className="inline-block mt-4 px-5 py-2 rounded-full font-bold
          bg-[#ffbb02] text-white border-2 border-black"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
