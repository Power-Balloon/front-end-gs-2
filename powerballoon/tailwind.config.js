/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1A2A3A',
        'light-blue': '#4D5B6E',
        'dark': '#121212',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
