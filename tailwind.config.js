/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#042B26",
        secondary: "#E5D896",
        lightSecondary: "#E5D89666",
        green: "#0EAB61",
        lightGray: "#00000080",
        mediumGray: "#000000B2",
      },
      fontFamily: {
        Sacramento: ["Sacramento", "cursive"],
      },
    },
  },
  plugins: [],
};
