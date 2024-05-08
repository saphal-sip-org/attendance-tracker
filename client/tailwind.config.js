/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-btn-primary': '#21aafc',
        'bg-btn-secondary': '#20A4F3'
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
}