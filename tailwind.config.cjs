/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orng: "#FF8C00",
          light: "#FFD8A8",
          mediem: "#FFCA7A",
          normal: "#FFAD42",
          red: "#D7301F",
          orange: "#FC8D59",
          beige: "#FDCC8A",
          white: "#FEF0D9",
        },
      },
    },
  },
  plugins: [],
};
