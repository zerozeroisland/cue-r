/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./js/**/*.js"], 
  safelist: [
    "bg-[url('./img/bg.gif')]",
    "bg-[url('/img/bg.gif')]"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};