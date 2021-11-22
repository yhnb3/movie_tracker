/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  isError: false,
  data: [],
};

export const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSearchResult: (state) => {
      state.loading = true;
    },
    getSearchResultFailure: (state) => {
      state.loading = false;
      state.isError = true;
    },
    getSearchResultSuccess: (state, { payload }) => {
      state.loading = false;
      state.isError = false;
      state.data = payload.data;
    },
  },
});

export const {
  getSearchResult,
  getSearchResultFailure,
  getSearchResultSuccess,
} = slice.actions;

export function fetchSearchResult(url) {
  return async (dispatch) => {
    dispatch(getSearchResult());
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(getSearchResultSuccess({ data: data.results }));
      console.log(data.results);
    } catch (error) {
      dispatch(getSearchResultFailure());
    }
  };
}

export const search = (state) => state.search;

export default slice.reducer;
