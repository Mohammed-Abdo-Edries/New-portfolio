
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      transitionDuration:{
        '1500': '1500ms'
      },
      transitionDelay: {
        '1500' : '1500ms',
        '2000': '2000ms',
        '3000': '3000ms'
      },
      colors:{
        primary: '250 47% 60%'
      },
      keyframes:{
        fadeIn:{
          '0%': {opacity: '0'},
          '100%' : {opacity: '1'}
        }, slideInDown:{
        '0%': {opacity: '0', transform: 'translateY(-30px)'},
        '100%' : {opacity: '1', transform: 'translateY(0px)'}
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-in-out forwards',
        slideInDown: 'slideInDown 0.7s ease-in-out forwards'
      }
    }
  },
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}

