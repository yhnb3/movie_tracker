/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: true,
  hasErrors: false,
  movie: {},
  provider: [],
};

export const slice = createSlice({
  name: 'movieDetail',
  initialState,
  reducers: {
    getMovieDetail: (state) => {
      state.loading = true;
    },
    getMovieDetailSuccess: (state, { payload }) => {
      state.movie = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getMovieDetailFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getMovieDetail, getMovieDetailFailure, getMovieDetailSuccess } =
  slice.actions;

export function fetchMovies(id) {
  return async (dispatch) => {
    dispatch(getMovieDetail());
    try {
      const detailResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id.id}?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
      );
      const videoResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id.id}/videos?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
      );

      const providerResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id.id}/watch/providers?api_key=${process.env.REACT_APP_API_CODE}`,
      );

      const crewResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id.id}/credits?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
      );
      const recommendationResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id.id}/recommendations?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=1`,
      );

      const data = await detailResponse.json();
      data.video = await videoResponse.json();
      const provider = await providerResponse.json();
      const crew = await crewResponse.json();
      const recommend = await recommendationResponse.json();

      data.provider = provider.results.KR;
      data.cast = crew.cast;
      data.crew = crew.crew;
      data.recommend = recommend.results;

      dispatch(getMovieDetailSuccess(data));
    } catch (error) {
      dispatch(getMovieDetailFailure());
    }
  };
}

export const movieDetail = (state) => state.movieDetail;

export default slice.reducer;
