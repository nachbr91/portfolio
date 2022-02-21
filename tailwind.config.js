const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#root',
  theme: {
    colors: {
      transparent: 'transparent',
      grey: '#eeeeee',
      blue: '#398ab9',
      white: colors.white,
      black: colors.black,
      'dark-blue': '#1c658c',
      beige: '#d8d2cb',
    },
    extend: {},
  },
  plugins: [],
}
