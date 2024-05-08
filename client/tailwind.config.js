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
      }
    },
  },
  plugins: [],
}