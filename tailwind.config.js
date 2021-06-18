const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.warmGray,
        pink: colors.rose,
        yellow: colors.amber
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        pacifico: 'Pacifico'
      },
      backgroundImage: theme => ({
        'logo': 'url(/images/logo.svg)',
        'header': 'url(/images/header.webp)',
        'cupcakes': 'url(/images/cupcakes.webp)',
        'cake': 'url(/images/cake.webp)',
        'lemon-pie': 'url(/images/lemonpie.webp)',
        'pavlova': 'url(/images/pavlova.webp)',
        'pavlova2': 'url(/images/pavlova2.webp)',
        'birthdaycake': 'url(/images/birthdaycake.svg)',
        'cookies': 'url(/images/cookies.svg)'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
