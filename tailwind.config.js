/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaulttheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "3xs": "300px",
      "2xs": "400px",
      xs: "500px",
      "2lg": "1110px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        white: "#fff",
        "gray-50": "#F9FAFB",
        "gray-100": "#F2F4F7",
        "gray-200": "#EAECF0",
        "gray-300": "#D0D5DD",
        "gray-500": "#667085",
        "gray-700": "#344054",
        "gray-900": "#101828",
        "primary-50": "#F9F5FF",
        "primary-300": "#D6BBFB",
        "primary-500": "#9E77ED",
        "primary-600": "#7F56D9",
        "primary-700": "#6941C6",
        "primary-800": "#53389E",
        "success-50": "#ECFDF3",
        "success-700": "#027A48",
      },
    },
  },
  plugins: [],
};
