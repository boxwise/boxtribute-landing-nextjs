const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  safelist: [
    { pattern: /^order-\d+$/ },
    { pattern: /^(bg|text|border)-(red|navy|darknavy|lightblue|yellow|gold|lightgray|white|black)$/ },
  ],
  theme: {
    extend: {
      colors: {
        red: "#EF404A",
        navy: "#315C88",
        darknavy: "#29335F",
        lightblue: "#AACFE3",
        black: "#000000",
        white: "#FFFFFF",
        yellow: "#E4AA4F",
        gold: "#D89016",
        lightgray: "#EAEBED",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        chivo: ["Chivo", '"Open Sans"', ...defaultTheme.fontFamily.sans],
        mono: ['"Roboto Mono"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
};
