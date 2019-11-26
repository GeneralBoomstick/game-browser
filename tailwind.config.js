module.exports = {
  theme: {
    extend: {
      colors: {
        'background':'#222831',
        'primary':'#393E46',
        'secondary':'#00ADB5',
        'alt': '#EEEEEE'
      }
    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    }
  },
  variants: {
    textTransform: ['responsive', 'hover'],
    letterSpacing: ['responsive', 'hover'],
    fontSize: ['responsive', 'hover'],
    padding: ['responsive', 'hover'],
    maxHeight: ['responsive']
  },
  plugins: []
}
