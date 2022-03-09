const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  important: '#root',
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '4rem',
      },
      center: true,
    },
    colors: {
      transparent: 'transparent',
      gray: '#eeeeee',
      'dark-gray': '#dfe1e5',
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
        fadeIn: {
          '0%': { opacity: 0 },
          '20%': { opacity: 0.2 },
          '40%': { opacity: 0.4 },
          '60%': { opacity: 0.6 },
          '80%': { opacity: 0.8 },
          '100%': { opacity: 1 },
        },
        bob: {
          '0%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(-4px)' },
          '100%': { transform: 'translateY(-8px)' },
        },
        float: {
          '100%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        carousel: 'carousel 8s ease-in-out infinite',
        fadeIn: 'fadeIn 0.3s',
        bob: 'bob .3s 0s ease-out 1 infinite forwards nomral',
        float: 'float .9s 0s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
