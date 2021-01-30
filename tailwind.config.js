module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx'
    ],
    darkMode: "class", // or 'media' or 'class'
    presets:[require('./preset-color')],
    theme: {},
    variants: {},
    plugins: [],
}

// Mofon Landing Page
// colors: {
//   orange: "#FF7143",
//   blue: "#5454D4", 
//   white: "#FFF",
//   gray: "#696871",
//   grayThin: "#EAE9F2"
// },
// textColor: {
//   white: "#FFF",
//   blue: "#5454D4", 
//   gray: "#696871",
//   black: "#19191B",
//   darkBlue: "#1D293F"

// },
// extend: {
//   colors: {
//     kiciw: "#34495e",
//     poek: "#263238",
//   },
//   textColor: {
//     'light': "#ecf0f1"
//   }
// },