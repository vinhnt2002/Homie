/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#f79c43",
        "slategray-100": "#6c757d",
        "slategray-200": "#687188",
        "crimson-100": "#ff324d",
        "crimson-200": "rgba(255, 50, 77, 0.2)",
        gainsboro: "#ddd",
        "gray-100": "#878787",
        "gray-200": "#292b2c",
        "gray-200": "#212529",
        lightgray: "#ced4da",
        darkgray: " #333",
        orange: " #ff9f00",
      },
    },
  },
  plugins: [],
};
