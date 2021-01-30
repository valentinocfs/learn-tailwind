const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx'
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                teal: colors.teal,
                lime: colors.lime,
                rose: colors.rose,
                fuchsia: colors.fuchsia
        }
      }
    },
    variants: {},
    plugins: [],
}