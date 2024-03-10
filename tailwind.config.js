/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('./assets/homepage/hero-bg.png')",
        'friday-bg': "url('./assets/homepage/friday-bg.png')",
        'kfc-bg': "url('./assets/homepage/kfc-bg.png')",
        'Testimonial': "url('./assets/homepage/testimonial-bg.png')",
      },
    },
  },
  plugins: [],
}