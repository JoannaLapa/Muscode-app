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
        xs: [
          '0.8125rem', //13px
          {
            fontWeight: '500'
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
        '1': '1px',
      },

      boxShadow: {
        "3xl": "0px 1px 9px 1px rgba(33, 31, 31, 0.14);",
      },

      colors: {
        'primary-100': '#384a5c', //font color
        'primary-200': '#333', //title color
        'success-100': '#862583', //color when focus
        'danger-100': '#9277FF',
        'danger-200': "#D73737",
        'neutral-100': ' #f5f8fa', //hover color
        'neutral-200': '#b2b2b2' //color borders
      },

      maxWidth: {
        96: '24rem', //384px
      },

      spacing: {
        0.5: '0.125rem', //2px
        2.5: '0.625rem', //10px
      },
    }
  },
  plugins: []
}
