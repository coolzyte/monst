const { readBuilderProgram } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      sm: "0px 2px 4px 0px rgba(11,10,55,0.15)",
      lg: "0px 8px 20px 0px rgba(18,16,99,0.06)",
    },
    fontFamily: {
      montserrat: "Montserrat, sans-serif",
      poppins: "Poppins, sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
