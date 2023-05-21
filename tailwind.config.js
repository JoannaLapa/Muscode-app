/*global require */
/*eslint no-undef: "error"*/

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      backgroundImage: {
        chevron: "url('/assets/chevron-down-solid.svg')"
      },

      backgroundSize: {
        1: '0.7rem'
      },

      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      },

      fontSize: {
        xxxs: '0.625rem', //10px
        xxs: '0.875rem', //11px
        xs: '0.75rem', //12px
        sm: [
          '0.8125rem', //13px
          {
            fontWeight: '400'
          }
        ],

        md: [
          '0.875', //14px
          {
            fontWeight: '400'
          }
        ]
      },

      borderWidth: {
        1: '1px'
      },

      boxShadow: {
        '3xl': '0px 1px 9px 1px rgba(33, 31, 31, 0.14);'
      },

      colors: {
        'primary-100': '#384a5c', //font color
        'primary-200': '#333', //title color
        'success-100': '#862583', //color when focus
        'success-200': '#333c85',
        'danger-100': '#9277FF',
        'danger-200': '#D73737',
        'neutral-100': ' #f5f8fa', //hover color
        'neutral-200': '#b2b2b2', //color borders
        'neutral-300': '#00000080' // black with opacity 0.5
      },

      gridTemplateColumns: {
        '3-equal': 'repeat(3, 1fr)'
      },

      maxWidth: {
        96: '24rem', //384px
        203.5: '50.875rem', //814px
        295: '73.75rem' //1180px
      },

      minHeight: {
        2.5: '0.625rem' //10px
      },

      minWidth: {
        62.5: '15.625rem' //250px
      },

      spacing: {
        0.2: '0.0625rem', //1px
        0.5: '0.125rem', //2px
        0.7: '0.1875rem', //3px
        1.5: '0.375rem', //6px
        2.5: '0.625rem', //10px
        2.7: '0.6875rem', //11px
        3.5: '0.875rem', //14px
        3.7: '0.9375rem', //15px
        4.3: '1.0625rem', //17px
        50: '12.5rem', //200px
        295: '73.75rem', //1180px
        68.7: '68.7%'
      },

      textUnderlineOffset: {
        middle: '-40%'
      },

      width: {
        '2/25': '8%',
        '3/25': '11.5%',
        '4/25': '16.5%',
        '5/25': '20.5%',
        '11/25': '43.5%',
        31.3: '31.3%'
      }
    }
  },
  plugins: []
}
