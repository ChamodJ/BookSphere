/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MeowScript: ["Meow Script" , "serif"], 
        poppins: ["Poppins", "serif"]
      },
    },
  },
  plugins: [],
}

