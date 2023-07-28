/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  dark: 'class',
  theme: {
    extend: {
      colors: {
        primaryColor: "#007ced",
        secondaryColor: "#051923", //darker blue 
      }
    },
  },
  plugins: [],
}

