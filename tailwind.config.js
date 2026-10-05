/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0a0a0a',
        'brand-dark': '#121212',
        'brand-gold': '#d4af37',
        'brand-gold-light': '#f3e5ab',
        'brand-gray': '#2a2a2a',
        'brand-gray-light': '#e5e5e5',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
