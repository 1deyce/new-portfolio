/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryColor: "#007ced",
        secondaryColor: "#051923", //darker blue 
      }
    },
  },
  screens: {
    'sm': '480px',
  
    'md': '640px',
  
    'lg': '992px',
  
    'xl': '1200px',
  },
  plugins: [],
}

