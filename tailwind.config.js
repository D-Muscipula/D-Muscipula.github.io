/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./tariffs.html", "./registration.html"
  , "./languages.html", "./node_modules/flowbite/**/*.js", "./about.html"
  , "./languages html/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

