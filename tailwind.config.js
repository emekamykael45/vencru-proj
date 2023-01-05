/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaulttheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "3xs": "300px",
      "2xs": "400px",
      xs: "500px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
};
