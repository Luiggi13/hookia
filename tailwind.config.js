/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {},
    screens: {
      '3xs': '100px',
      '2xs': '400px',
    }
  },
  plugins: [],
}
