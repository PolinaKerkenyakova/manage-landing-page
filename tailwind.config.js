module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        'bright-red': 'hsl(12, 88%, 59%)',
        'dark-blue': 'hsl(228, 39%, 23%)',
        'dark-graish-blue': 'hsl(227, 12%, 61%)',
        'very-dark-blue': 'hsl(233, 12%, 13%)',
        'very-pale-red': 'hsl(13, 100%, 96%)',
        'very-light-gray': 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}
