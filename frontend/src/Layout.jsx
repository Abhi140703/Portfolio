import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
