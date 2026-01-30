export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Abhishek Dungdung. All rights reserved.
        </p>

        <p className="text-sm mt-2 text-gray-400">
          Built with <span className="text-[#ffbb02]">React</span> &{" "}
          <span className="text-[#ffbb02]">TailwindCSS</span>
        </p>
      </div>
    </footer>
  );
}
