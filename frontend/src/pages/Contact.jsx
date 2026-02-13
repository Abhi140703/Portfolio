import { useNavigate } from "react-router-dom";
import ContactSection from "../components/Contact";

export default function ContactPage() {
  const navigate = useNavigate();

  return (
    <section className="pt-24 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="mb-10 text-primary font-semibold hover:underline"
        >
          ← Go back
        </button>

        {/* CONTACT FORM */}
        <ContactSection />
      </div>
    </section>
  );
}
