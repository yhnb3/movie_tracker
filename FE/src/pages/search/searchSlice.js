/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isMount: false,
  loading: false,
  isError: false,
  currentPage: 1,
  currentSection: 'movie',
  data: {
    movie: {},
    tv: {},
    person: {},
  },
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
      state.currentSection = payload.currentSection;
    },
    getMoreSearchResultSuccess: (state, { payload }) => {
      state.loading = false;
      state.isError = false;
      state.data[payload.section][payload.page] = payload.data;
    },
    changeSection: (state, { payload }) => {
      state.currentSection = payload.section;
      state.currentPage = 1;
    },
    changePage: (state, { payload }) => {
      state.currentPage = payload.page;
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
  getMoreSearchResultSuccess,
  changePage,
  changeSection,
  setTotalPage,
  changeIsMount,
} = slice.actions;

export function fetchSearchResult(query) {
  return async (dispatch) => {
    dispatch(getSearchResult());
    try {
      const personResponse = await fetch(
        `https://api.themoviedb.org/3/search/person?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&query=${query}&page=1&include_adult=false`,
      );
      const tvResponse = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&query=${query}&page=1&include_adult=false`,
      );
      const movieResponse = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&query=${query}&page=1&include_adult=false`,
      );
      const personData = await personResponse.json();
      const tvData = await tvResponse.json();
      const movieData = await movieResponse.json();

      const currentSection =
        (movieData.total_results && 'movie') ||
        (tvData.total_results && 'tv') ||
        (personData.total_results && 'person');
      const data = {
        movie: {
          currentPage: 1,
          totalPage: movieData.total_pages,
          page: 1,
          1: movieData.results,
          totalResults: movieData.total_results,
        },
        tv: {
          currentPage: 1,
          totalPage: tvData.total_pages,
          page: 1,
          1: tvData.results,
          totalResults: tvData.total_results,
        },
        person: {
          currentPage: 1,
          totalPage: personData.total_pages,
          page: 1,
          1: personData.results,
          totalResults: personData.total_results,
        },
      };
      dispatch(
        getSearchResultSuccess({
          currentSection,
          data,
        }),
      );
    } catch (error) {
      console.log(error);
      dispatch(getSearchResultFailure());
    }
  };
}

export function fetchMoreSearchResult({ query, section, page }) {
  return async (dispatch) => {
    dispatch(getSearchResult());
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/${section}?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&query=${query}&page=${page}&include_adult=false`,
      );
      const data = await response.json();
      dispatch(
        getMoreSearchResultSuccess({ section, page, data: data.results }),
      );
    } catch (error) {
      console.log(error);
      dispatch(getSearchResultFailure());
    }
  };
}

export const search = (state) => state.search;

export default slice.reducer;
