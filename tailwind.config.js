/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"media",
  theme: {
    colors:{
      txtdrk:"#fff",
      txtnrl:"#000",
      txthilted:"#D20000",
      bgdrk:"#000",
      bgnrl:"#fff",
      bgtrnpt:"transparent",
    },
    fontFamily:{
      mainfnt:["Playfair Display","Lumanosimo"]
    },
    extend: {},
  },
  plugins: [],
}

