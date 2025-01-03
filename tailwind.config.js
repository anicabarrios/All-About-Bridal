/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: '#d4afb9',
        customdark: '#b8929c',
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        blush: {
          50: '#fff5f7',
          100: '#ffebef',
          200: '#ffd6d9',
          300: '#ffc2c4',
          400: '#ffadb0',
          500: '#ff99a1',
          600: '#ff8593',
          700: '#ff7184',
          800: '#ff5d76',
          900: '#ff4967',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        chopin: ['Chopin Script', 'cursive'], // Custom Chopin Script font
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
