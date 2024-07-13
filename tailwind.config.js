/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#FF8888", // Neon Pink
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111", // Background Black
        neonPink: "#FF8888",
        neonBlack: "#000000",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      boxShadow: {
        neon: "0 4px 15px rgba(255, 136, 136, 0.8)",
      },
    },
  },
  plugins: [],
};
