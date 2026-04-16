/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FAF8F3',
        'cream-dark': '#EEE8DC',
        teal: {
          DEFAULT: '#007D78',
          light: '#1AADA7',
          dark: '#005E5A',
          50: '#E5F5F4',
          100: '#BEEAE8',
        },
        sand: '#C5B48A',
        orange: '#D4712A',
        charcoal: '#27211D',
        'warm-gray': '#6B6058',
        'warm-brown': '#5C4A35',
        sage: '#E8F4F1',
        'sage-dark': '#CCE8E2',
      },
    },
  },
  plugins: [],
}
