/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'false'
  theme: {
    extend: {
      backgroundColor : {
        dark : {
        'primary': '#2D3748',
        },
        light : {
        'primary': '#FFFFFF',
        }
      },
      colors: {
        dark: {
          primary: '#2D3748',
          secondary: '#718096',
          accent: '#F56565',
        },
        light: {
          primary: '#FFFFFF',
          secondary: '#E2E8F0',
          accent: '#ED64A6',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
