/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  items: {
    populars: {
      currentCategory: 'movie',
      section: {},
    },
    top_rated: {
      currentCategory: 'movie',
      section: {},
    },
    trending: {
      currentCategory: 'day',
      section: {},
    },
  },
};

export const slice = createSlice({
  name: 'contentList',
  initialState,
  reducers: {
    getContentList: (state, { payload }) => {
      state.items[payload.name].section[payload.category] = {
        loading: true,
        hasErrors: false,
        data: [],
      };
    },
    getContentListSuccess: (state, { payload }) => {
      state.items[payload.name].section[payload.category].data = payload.list;
      state.items[payload.name].section[payload.category].loading = false;
      state.items[payload.name].section[payload.category].hasErrors = false;
    },
    getContentListFailure: (state, { payload }) => {
      state.items[payload.name].section[payload.category].loading = false;
      state.items[payload.name].section[payload.category].hasErrors = true;
    },
    changeCategory: (state, { payload }) => {
      state.items[payload.name].currentCategory = payload.category;
    },
  },
});

export const {
  getContentList,
  getContentListFailure,
  getContentListSuccess,
  changeCategory,
  addCategory,
} = slice.actions;

export function fetchMovies({ url, name, category }) {
  return async (dispatch) => {
    dispatch(getContentList({ name, category }));
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(getContentListSuccess({ name, list: data.results, category }));
    } catch (error) {
      dispatch(getContentListFailure({ name, category }));
    }
  };
}

export const contentList = (state) => state.contentList;

export default slice.reducer;
