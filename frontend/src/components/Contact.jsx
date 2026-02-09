import { useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/messages", form);
      alert("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message ❌");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-100 flex justify-center items-center px-4"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl space-y-4"
      >
        <h2
          className="text-3xl font-bold text-center text-[#ffbb02] 
    [-webkit-text-stroke:2px_black]"
        >
          Contact Me
        </h2>

        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded-lg"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded-lg"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full border px-4 py-2 rounded-lg"
        />

        <button
          className="w-full bg-[#ffbb02] text-white py-3 rounded-lg hover:bg-[#ffbb02] text-lg border-2 border-black hover:bg-black hover:text-[#ffbb02] 
          [-webkit-text-stroke:1px_black]
    hover:[-webkit-text-stroke:0px_transparent]"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
