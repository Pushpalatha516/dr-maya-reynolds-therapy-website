/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lilac: {
          light: "#f3ecf9",
          DEFAULT: "#cbb7e2",
          dark: "#5b3c88",
        },
      },
    },
  },
  plugins: [],
}
