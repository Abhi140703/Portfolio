import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-[#ffbb02] text-center mb-10">
        Admin Dashboard
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Manage Blogs */}
        <Link
          to="/admin/blogs"
          className="bg-white p-6 shadow-lg rounded-xl border hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-bold text-[#ffbb02] mb-2">
            Manage Blogs
          </h2>
          <p className="text-gray-600">Add, edit & delete blog posts</p>
        </Link>

        {/* Create Blog */}
        <Link
          to="/admin/blogs/create"
          className="bg-white p-6 shadow-lg rounded-xl border hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-bold text-green-600 mb-2">
            Create Blog
          </h2>
          <p className="text-gray-600">
            Post new content with image & category
          </p>
        </Link>

        {/* Manage Messages */}
        <Link
          to="/admin/messages"
          className="bg-white p-6 shadow-lg rounded-xl border hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Messages</h2>
          <p className="text-gray-600">View contact form messages</p>
        </Link>

        {/* Manage Projects */}
        <Link
          to="/admin/projects"
          className="bg-white p-6 shadow-lg rounded-xl border hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-bold text-orange-600 mb-2">Projects</h2>
          <p className="text-gray-600">Add & update portfolio projects</p>
        </Link>

        {/* Settings */}
        <Link
          to="/admin/settings"
          className="bg-white p-6 shadow-lg rounded-xl border hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Settings</h2>
          <p className="text-gray-600">Change password, meta info, etc.</p>
        </Link>
      </div>

      {/* Logout Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin";
          }}
          className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
