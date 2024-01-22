/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earthYellow: {
          DEFAULT: '#D2A253'
        },
        wine: {
          DEFAULT: '#752330'
        },
        bistre: {
          DEFAULT: '#402218'
        },
        Licorice: {
          DEFAULT: '#140c0A'
        },
        cream: {
          DEFAULT: '#FFF2D7'
        },
        brown: {
          50: '#f5f0eb',
          100: '#ead6cc',
          200: '#debaaa',
          300: '#d29e88',
          400: '#c68266',
          500: '#ba6644',
          600: '#9e5136',
          700: '#7d3d29',
          800: '#5d291c',
          900: '#3c160f',
        },
      },
    },
  },
  plugins: [],
};
