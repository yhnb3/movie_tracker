/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  movies: {},
};

export const slice = createSlice({
  name: 'contentList',
  initialState,
  reducers: {
    getContentList: (state, { payload }) => {
      state.loading = true;
      state.movies[payload] = [];
    },
    getContentListSuccess: (state, { payload }) => {
      state.movies[payload.category] = payload.list;
      state.loading = false;
      state.hasErrors = false;
    },
    getContentListFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getContentList, getContentListFailure, getContentListSuccess } =
  slice.actions;

export function fetchMovies({ url, category }) {
  return async (dispatch) => {
    dispatch(getContentList(category));
    try {
      const response = await fetch(url);
      const data = await response.json();

      dispatch(getContentListSuccess({ category, list: data.results }));
    } catch (error) {
      dispatch(getContentListFailure());
    }
  };
}

export const contentList = (state) => state.contentList;

export default slice.reducer;
