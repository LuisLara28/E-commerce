module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkGray: "#2C3E50",
      lightGray: "#BDC3C7",
      white: "#fff",
      black: "#000",
      purple: "#89216B",
      lightPurple:"#a3277f",
      peach: "#CE546D",
      lightPeach:"#eb607d",
      green: "#39841E",
      orange: "#FF922E",
      redOrange: "#eb3e13",
      red: "#FF0000",
      litegray: "#F5F5F5",
      blue:"#1b3070",
      lightBlue:"#3460e3",
      lightRedOrange: "#fc714e"
    },
    gradientColorStops: theme => ({
      'primary': "#2C3E50",

      'secondary': "#BDC3C7",

      'danger': '#e3342f',
      'purple': "#89216B",
      'peach': "#CE546D",
      'lightPurple':"#A3277F",
      'lightPeach':"#EB607D",
     }),
    extend: {
      width: {

        '1/7': '14.2857143%',

        '2/7': '28.5714286%',

        '3/7': '42.8571429%',

        '4/7': '57.1428571%',

        '5/7': '71.4285714%',

        '6/7': '85.7142857%',

        '19/20': '95%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
