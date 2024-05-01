/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   "pokemon-blue": "#5db9ff",
    // },
    extend: {
      colors: {
        "pokemon-blue": "#5db9ff",
        grass: "#E2F9E1",
        normal: "#F4F4F4",
        fire: "#FBE3DF",
        water: "#E0F1FD",
        fairy: "rgba(255, 192, 203, 0.863)",
        poison: "#e0a7f6",
        bug: "#F6D6A7",
        electric: "rgb(255, 255, 161)",
        ghost: "rgb(247, 247, 247)",
        rock: "rgb(148, 81, 81)",
      },
    },
  },
  plugins: [],
};
