// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'header-pattern': "url('./src/images/pattern-bg.png')"
      },
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif']
      },
      colors: {
        'Dark-Gray': {
          DEFAULT: 'hsl(0, 0%, 59%)',
          very: ' hsl(0, 0%, 17%)'
        }
      },
    },
  },
  plugins: [],
}