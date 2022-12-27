/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {},
    screens: {
      'sm': '400px',
      'md': '600px',
      'lg': '800px',
      'xl': '1000px',
      '2xl': '1500px',
    }
  },
  plugins: [],
}
