import { useState } from "react";
import api from "../api/api";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        form,
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        window.location.href = "/admin/dashboard";
      }
    } catch (err) {
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-2xl rounded-xl w-96"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-[#ffbb02]">
          Admin Login
        </h1>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-3 border rounded mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-3"
          onChange={handleChange}
        />

        <button className="w-full bg-[#ffbb02] text-white py-3 rounded-lg hover:bg-[#ffbb02]">
          Login
        </button>
      </form>
    </div>
  );
}
