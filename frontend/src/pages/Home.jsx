import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* NEXT SECTION */}
      <section className="bg-white py-32 px-20">
        <h2 className="text-3xl font-bold">Projects</h2>
      </section>
    </>
  );
}
