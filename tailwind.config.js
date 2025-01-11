/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'portafolio': '#02091C',
        'card': 'rgba( 255, 255, 255, 0.03 )',
      },
      colors: {
        'primary-color': '#0099FF',
        'circle-color': '#02234A',
      }
    },
  },
  plugins: [],
} 