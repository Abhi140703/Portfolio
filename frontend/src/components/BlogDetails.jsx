import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import api from "../api/api";

export default function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    api
      .get(`/api/blogs/slug/${slug}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, [slug]);

  if (!blog) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="border-2 border-black max-w-4xl bg-[#ffbb02] mx-auto mt-20 mb-20 px-6 py-20">
      <Link
        to="/"
        className="
    fixed
    top-6
    left-6
    z-50
    text-[#ffbb02]
    font-semibold
    hover:underline text-2xl
    [-webkit-text-stroke:1px_black]
  "
      >
        ← Back to Home
      </Link>

      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-xl mb-6 border-2 border-black "
        />
      )}

      <h1 className="text-4xl text-white mb-4">
        <span
          className="text-white 
    [-webkit-text-stroke:1px_black]"
        >
          Title:-{" "}
        </span>
        {blog.title}
      </h1>

      <p className="text-sm text-white mb-6">
        {" "}
        <span
          className="text-white text-xl font-bold
    [-webkit-text-stroke:1px_black]"
        >
          Category:-{" "}
        </span>
        {blog.category}
      </p>

      <div className="text-white leading-8 text-2xl whitespace-pre-line">
        {" "}
        <span className="text-white  font-bold [-webkit-text-stroke:1px_black]">
          Content:-{" "}
        </span>
        {blog.content}
      </div>
    </div>
  );
}
