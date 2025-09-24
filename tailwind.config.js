/* ===================================================================
tailwind.config.js
=================================================================== */


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          bruma: {
            DEFAULT: '#d4af37', // gold accent
            dark: '#0c0a09', // deep dark background
            neutral: '#bfa66a', // muted gold/gray
          },
      },
    },
  },
  plugins: [],
};