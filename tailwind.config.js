/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#64CEFB',
      },
      letterSpacing: {
        'tighter': '-0.05em',
      },
      lineHeight: {
        'hero': '0.85',
      }
    },
  },
  plugins: [],
}

