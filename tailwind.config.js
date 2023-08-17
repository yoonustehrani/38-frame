/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.js",
    "./resources/**/*.tsx",
    "./resources/**/*.ts",
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
        },
        'creamy': '#F8F3E8'
      },
      backgroundImage: {
        'zebra': 'repeating-linear-gradient(45deg, #ffbf70, #ffbf70 4px, #FE9920 4px, #FE9920 10px)',
        'camera-on-table': 'url(/public/images/seller-camera.webp)',
        'rope': 'repeating-linear-gradient(45deg, #F7DF9F, #DC961A 6px, #C17900 8px, #9E5000 10px)',
        'yashika-sm': 'url(/public/images/Yashika-360x480.webp)',
        'yashika-lg': 'url(/public/images/Yashika-1920X860.webp)',
        'green-pattern': 'url(/public/images/main-page-bg.webp)',
        'old-phone': 'url(/public/images/old-phone.webp)',
        'shark': 'url(/public/images/shark-background.webp)'
      }
    },
  },
  plugins: []
}

