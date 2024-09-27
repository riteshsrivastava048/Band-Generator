/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs"],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto'],
      },
      fontWeight: {
        'extra-bold': 800, // Custom font weight if you want to define new ones
      }
    },
  },
  plugins: [],
}

