export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-2">
        <p className="text-sm">
          © {new Date().getFullYear()} Abhishek Dungdung. All rights reserved.
        </p>

        <p className="text-xs text-gray-400">
          Built with <span className="text-primary font-medium">React</span> &{" "}
          <span className="text-primary font-medium">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
