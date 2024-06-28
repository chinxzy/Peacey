/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#0094A1",
        "primary-500": "#007B86",
        "primary-100": "#80C9D0",
        secondary: "#72BF45",
        danger: "#FF0000",
        bgGradLeft: "#0094A1",
        bgGradRight: "#003136",
        lightgray: "#666666"
      },
      width: {
        "33rem": "33rem"
      }
    },
  },
  plugins: [],
}

