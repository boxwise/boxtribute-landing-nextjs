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
        'sm': '0.875rem',
        'md': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '7rem',
      },
    },
  },
}
