/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      rotate: {
        '45': '45deg',
        '135' : '135deg',
        '360' : '360deg'
      },
      textColor: {
        'myColor': '#00df90',
      },
      backgroundColor:{
        'myColor': '#00df90',
      }
    },
  },
  plugins: [],
}
