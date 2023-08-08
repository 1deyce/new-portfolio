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
    // => @media (min-width: 576px) { ... }
  
    'md': '640px',
    // => @media (min-width: 768px) { ... }
  
    'lg': '992px',
    // => @media (min-width: 992px) { ... }
  
    'xl': '1200px',
    // => @media (min-width: 1200px) { ... }
  },
  plugins: [],
}

