/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#4ade80",
        secondary: "#64748b",
        dark: "#171717",
        third: "#14b8a6",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
