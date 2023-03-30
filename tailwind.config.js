/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: '"Open Sans"',
      mulish: '"Mulish"',
    },
    extend: {
      colors: {
        myRed: "#EB3F57",
        myGray: "#454654",
        myBlack: "#000000",
      },
    },
  },
  plugins: [],
};
