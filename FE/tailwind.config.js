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
    },
    minWidth: {
      personImg: '300px',
      posterImg: '130px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
