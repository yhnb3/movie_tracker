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
        `https://api.themoviedb.org/3/movie/${id.id}?api_key=36280866a80b71c69c0131b57e760ee2&language=ko`,
      );
      const videoResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id.id}/videos?api_key=36280866a80b71c69c0131b57e760ee2&language=ko`,
      );

      const providerResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id.id}/watch/providers?api_key=36280866a80b71c69c0131b57e760ee2`,
      );

      const crewResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id.id}/credits?api_key=36280866a80b71c69c0131b57e760ee2&language=ko`,
      );

      const data = await detailResponse.json();
      data.video = await videoResponse.json();
      const provider = await providerResponse.json();
      const crew = await crewResponse.json();
      data.provider = provider.results.KR;
      data.crew = crew.cast;

      dispatch(getMovieDetailSuccess(data));
    } catch (error) {
      dispatch(getMovieDetailFailure());
    }
  };
}

export const movieDetail = (state) => state.movieDetail;

export default slice.reducer;
