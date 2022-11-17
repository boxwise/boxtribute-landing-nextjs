const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        red: '#EF4049',
        navy: '#29335F',
        lightblue: '#AACFE3',
        black: '#000000',
        white: '#FFFFFF',
        yellow: '#F4E6A0',
        lightgray: '#EAEBED'
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      // TODO: unify with styles/index.css definitions
      fontSize: {
        'md': '1rem',
      },
      fontFamily: {
        'sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        'chivo': ['Chivo', '"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
