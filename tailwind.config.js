/*global require */
/*eslint no-undef: "error"*/

/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      },

      fontSize: {
        xxs: '0.75rem', //12px
        xs: [
          '0.8125rem', //13px
          {
            fontWeight: '400'
          }
        ],

        base: [
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
        'danger-100': '#9277FF',
        'danger-200': '#D73737',
        'neutral-100': ' #f5f8fa', //hover color
        'neutral-200': '#b2b2b2' //color borders
      },

      maxWidth: {
        96: '24rem' //384px
      },

      spacing: {
        0.5: '0.125rem', //2px
        1.5: '0.375rem', //6px
        2.5: '0.625rem' //10px
      },

      width: {
        '2/25': '8%',
        '3/25': '11.5%',
        '4/25': '16.5%',
        '5/25': '20.5%',
        '11/25': '43.5%'
      }
    }
  },
  plugins: []
}
