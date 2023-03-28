/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-amazon': '#FEAA2B',
        'yellow-secondary': '#FFBB56',
        'blue-amazon':'#12083A',
        'blue-secondary':'#271F49'
      },
    },
  },
  plugins: [],
}
