const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#root',
  theme: {
    colors: {
      transparent: 'transparent',
      grey: '#eeeeee',
      blue: '#398ab9',
      'dark-blue': '#1c658c',
      white: colors.white,
      black: colors.black,
      beige: '#d8d2cb',
    },
    fontFamily: {
      sans: [
        'Poppins',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {
      keyframes: {
        carousel: {
          '20%': { transform: 'translateY(-30px)' },
          '40%': { transform: 'translateY(-60px)' },
          '60%': { transform: 'translateY(-90px)' },
          '80%': { transform: 'translateY(-120px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        carousel: 'carousel 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
