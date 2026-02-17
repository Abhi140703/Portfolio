import { Link } from "react-router-dom";
import SafeImage from "../components/SafeImage";

export default function ProjectCard({ project }) {
  const { _id, title, description, image } = project;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
      {image ? (
        <SafeImage
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-muted flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      <div className="p-6">
        <h2 className="text-xl font-semibold text-dark">
          {title}
        </h2>

        <p className="text-gray-600 mt-2 line-clamp-3">
          {description}
        </p>

        <Link
          to={`/projects/${_id}`}
          className="
            inline-block mt-4 mb-6
            px-2 py-1
            rounded-full
            font-semibold
            border border-primary
            text-primary
            hover:bg-primary
            hover:text-dark
            transition
          "
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
