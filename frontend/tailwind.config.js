/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        accent: "var(--accent)",
        muted: "var(--muted)",
        bg: "var(--bg)",
        dark: "var(--dark)",
      },
    },
  },
  plugins: [],
};
