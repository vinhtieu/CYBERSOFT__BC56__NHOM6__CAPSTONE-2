/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
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
  plugins: [require("tailwindcss-debug-screens", "flowbite/plugin")],
};
