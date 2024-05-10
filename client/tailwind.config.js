/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-primary': '#6c63ff',
        'color-secondary': '#20A4F3',
        'color-danger': '#ff3366',
        'color-black': '#011627',
        'color-white': '#f6f7f8'
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(-5px)'},
          '50%': { transform: 'translateY(5px)'},
          '100%': { transform: 'translateY(-5px)'},
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite'
      }
    },

  },
  plugins: [],
  varients:{
    extends: {
      display: ["focus-group"]
    }
  }
}