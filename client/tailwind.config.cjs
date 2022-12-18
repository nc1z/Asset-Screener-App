/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neob-green-200": "#63f2b7",
        "neob-green-400": "#67bca4",
        "neob-green-600": "#43a27a",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
