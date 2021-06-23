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
      }),
      keyframes: {
        slideIn: {
          '0%': { left: '-110%' },
          '100%': { left: '0' }
        },
        slideOut: {
          '0%': { left: '0' },
          '100%': { left: '-110%' }
        },
        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        slideIn: 'slideIn 500ms ease-in-out forwards',
        slideOut: 'slideOut 500ms ease-in-out forwards',         
        opacity: 'opacity 300ms ease-out forwards '        
      },
      height: {
        'max-content': 'max-content'
      }
        
    },
  },
  variants: {
    extend: {
      brightness: ['hover'],
    },
  },
  plugins: [],
}
