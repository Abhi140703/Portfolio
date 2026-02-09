import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
