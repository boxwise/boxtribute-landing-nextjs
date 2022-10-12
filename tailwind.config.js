module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        red: '#EF4049',
        navy: '#29335F',
        blue: '#ABCFE3',
        gray: '#EAEAED',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      // TODO: unify with styles/index.css definitions
      fontSize: {
        'md':'1rem',
        'xl': '1.25',
        '2xl': '1.5rem',
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '7rem',
      },
    },
  },
}
