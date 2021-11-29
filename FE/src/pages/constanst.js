/* eslint-disable import/prefer-default-export */
export const items = {
  populars: {
    movie: `ttps://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=1`,
    tv: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=1`,
  },
};
