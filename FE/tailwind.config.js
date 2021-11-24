/* eslint-disable global-require */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      scorll: '0 0 auto',
    },
    extend: {
      width: {
        img: '150px',
      },
      height: {
        img: '225px',
        poster: '570px',
        list: '21rem',
      },
      inset: {
        '1/8': '12.5%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
