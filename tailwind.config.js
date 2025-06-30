/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors:{
        primary: '250 47% 60%'
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

