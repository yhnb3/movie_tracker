/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  page: 1,
  endPage: 1,
  loading: false,
  isError: false,
  data: [],
  isMount: false,
};

export const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSearchResult: (state) => {
      state.loading = true;
    },
    getMoreSearchResult: (state, { payload }) => {
      state.data = state.data.concat(payload.data);
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
    setEndPage: (state, { payload }) => {
      state.endPage = payload.endPage;
    },
    changePage: (state) => {
      state.page += 1;
    },
    initPage: (state) => {
      state.page = 1;
    },
    changeIsMount: (state) => {
      state.isMount = true;
    },
  },
});

export const {
  getSearchResult,
  getSearchResultFailure,
  getSearchResultSuccess,
  setEndPage,
  initPage,
  changePage,
  getMoreSearchResult,
  changeIsMount,
} = slice.actions;

export function fetchSearchResult(url) {
  return async (dispatch) => {
    dispatch(getSearchResult());
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(setEndPage({ endPage: data.total_pages }));
      dispatch(getSearchResultSuccess({ data: data.results }));
      console.log(data.results);
    } catch (error) {
      dispatch(getSearchResultFailure());
    }
  };
}
export function fetchMoreSearchResult(url) {
  return async (dispatch) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(getMoreSearchResult({ data: data.results }));
    console.log(data.results);
  };
}

export const search = (state) => state.search;

export default slice.reducer;
