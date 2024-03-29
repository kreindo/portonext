/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'biru-pondok': '#465C60',
        'biru-terang-pondok': '#009FB7',
      },
    },
  },
  plugins: [],
};
