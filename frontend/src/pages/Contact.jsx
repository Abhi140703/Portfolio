import { useNavigate } from "react-router-dom";
import ContactSection from "../components/Contact";

export default function ContactPage() {
  const navigate = useNavigate();
  return (
    <div className="pt-24 px-6">
      <button
        onClick={() => navigate(-1)}
        className="
        mb-6
        text-[#ffbb02]
        font-bold
        hover:underline
        "
      >
        ← Go back
      </button>
      <ContactSection />
    </div>
  );
}
