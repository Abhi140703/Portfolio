import { useState } from "react";
import api from "../api/api";

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
      className="py-24 bg-gray-50 flex justify-center px-6"
    >
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-lg bg-white
          p-10 rounded-2xl shadow-lg
          space-y-6
        "
      >
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-dark">
          Get in Touch
        </h2>

        <p className="text-center text-gray-600 text-sm">
          Have a question or want to work together?  
          Drop me a message.
        </p>

        {/* NAME */}
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="
            w-full px-4 py-3 rounded-lg
            border border-gray-300
            focus:outline-none focus:ring-2
            focus:ring-primary/40
          "
        />

        {/* EMAIL */}
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="
            w-full px-4 py-3 rounded-lg
            border border-gray-300
            focus:outline-none focus:ring-2
            focus:ring-primary/40
          "
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="4"
          className="
            w-full px-4 py-3 rounded-lg
            border border-gray-300
            resize-none
            focus:outline-none focus:ring-2
            focus:ring-primary/40
          "
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="
            w-full py-3 rounded-lg font-semibold
            bg-primary text-white
            hover:bg-dark transition
          "
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
