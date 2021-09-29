/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  movies: [],
};

export const slice = createSlice({
  name: 'nowPlaying',
  initialState,
  reducers: {
    getNowPlaying: (state) => {
      state.loading = true;
    },
    getNowPlayingSuccess: (state, { payload }) => {
      state.movies = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getNowPlayingFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getNowPlaying, getNowPlayingFailure, getNowPlayingSuccess } =
  slice.actions;

export function fetchMovies() {
  return async (dispatch) => {
    dispatch(getNowPlaying());

    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=36280866a80b71c69c0131b57e760ee2&language=en-US&page=1',
      );
      const data = await response.json();

      dispatch(getNowPlayingSuccess(data));
    } catch (error) {
      dispatch(getNowPlayingFailure());
    }
  };
}

export const nowPlaying = (state) => state.nowPlaying;

export default slice.reducer;
