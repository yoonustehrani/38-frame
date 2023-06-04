/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      animation: {
        // 'appear-from-right': 'AppearFromRight linear 750ms',
      },
      fontFamily: {
        'iran-sans': 'IranSansWeb'
      },
      colors: {
        'x-green': '#558564',
        'x-dark-blue': '#102542',
        'x-yellow': '#FE9920',
        'x-grey': '#CDD7D6',
        'custom-black': {
          900: '#222222',
          800: '#333333',
          DEFAULT: '#000000'
        }
      }
    },
  },
  plugins: []
}

