/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
