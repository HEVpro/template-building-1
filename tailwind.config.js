const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangee: "#f37b20",
      },
      fontFamily: {
        Playfair: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        Merriweather: ["Merriweather", ...defaultTheme.fontFamily.serif]
      },
    },
  },
  plugins: [],
};
