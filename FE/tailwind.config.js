/* eslint-disable global-require */

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      scorll: '0 0 auto',
    },
    extend: {
      animation: {
        'show-header': 'show-header 0.3s ease-out',
        'hide-header': 'hide-header 0.3s ease-out',
      },
      keyframes: {
        'show-header': {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '50%': {
            transform: 'translateY(-50%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
        'hide-header': {
          '0%': {
            transform: 'translateY(100%)',
          },
          '50%': {
            transform: 'translateY(50%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
      },
      width: {
        img: '150px',
        sm_backdrop: '250px',
      },
      height: {
        img: '225px',
        poster: '570px',
        list: '21rem',
        sm_backdrop: '141px',
      },
      inset: {
        '1/8': '12.5%',
      },
      colors: {
        whiteOp100: 'rgb(255 255 255 / 100%)',
        whiteOp50: 'rgb(255 255 255 / 50%)',
        whiteOp0: 'rgb(255 255 255 / 0%)',
      },
    },
    minWidth: {
      personImg: '300px',
      posterImg: '130px',
    },
  },
  variants: {
    extend: {
      scrollbar: ['rounded'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],
};
