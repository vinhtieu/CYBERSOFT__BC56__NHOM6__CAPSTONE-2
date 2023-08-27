/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./src/admin/views/index.html",
  ],
  theme: {
    extend: {
      screens: {
        "4xl": "1753px",
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
    debugScreens: {
      position: ["bottom", "left"],
      style: {
        backgroundColor: "#C0FFEE",
        color: "black",
        // ...
      },
      prefix: "screen: ",
      selector: ".debug-screens",
    },
  },
  plugins: [require("tailwindcss-debug-screens"), require("flowbite/plugin")],
};
