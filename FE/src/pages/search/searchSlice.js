/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  isError: false,
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
    changeSection: (state, { payload }) => {
      state.currentSection = payload.section;
    },
  },
});

export const {
  getSearchResult,
  getSearchResultFailure,
  getSearchResultSuccess,
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

export const search = (state) => state.search;

export default slice.reducer;
