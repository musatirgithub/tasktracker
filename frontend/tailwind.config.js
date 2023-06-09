/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bubblegum: "#ff77e9",
        bermuda: "#78dcca",
        orange: "#FF9900",
        darkgray: "#444444",
        green: "#84cc16",
        red: "#f87171",
        lightgray: "#e2e8f0",
        black: "#262626",
        done: "#a1a1aa",
        bgverylight: "#737373",
        deadlinepassed: "#ef4444",
      },
    },
  },
  plugins: [],
};
