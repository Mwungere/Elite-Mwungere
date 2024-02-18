/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A29',
        secondary: '#7562E0',
        navbar: '#181824'
      },
      fontFamily: {
        body: ['Poppins']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

