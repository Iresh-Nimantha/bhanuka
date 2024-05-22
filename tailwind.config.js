/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "neon-border": "neon 2s linear infinite",
      },
      keyframes: {
        neon: {
          "0%, 100%": {
            "box-shadow":
              "0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff, 0 0 80px #0ff",
          },
          "50%": {
            "box-shadow":
              "0 0 10px #00f, 0 0 20px #00f, 0 0 40px #00f, 0 0 80px #00f, 0 0 160px #00f",
          },
        },
      },
    },
  },
  plugins: [],
});
