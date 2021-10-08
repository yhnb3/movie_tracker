/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  hasErrors: false,
  items: {
    populars: {
      currentCategory: 'movie',
      tv: {},
      movie: {},
    },
    latest: {
      currentCategory: 'movie',
      tv: {},
      movie: {},
    },
  },
};

export const slice = createSlice({
  name: 'contentList',
  initialState,
  reducers: {
    getContentList: (state, { payload }) => {
      state.loading = true;
      state.items[payload] = [];
    },
    getContentListSuccess: (state, { payload }) => {
      state.items[payload.name][payload.category] = payload.list;
      state.loading = false;
      state.hasErrors = false;
    },
    getContentListFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    addCategory: (state, { payload }) => {
      state.items[payload.name] = {
        data: state.items[payload.name],
        category: payload.category,
      };
    },
    changeCategory: (state, { payload }) => {
      state.items[payload.section].currentCategory = payload.category;
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
    dispatch(getContentList(name));
    dispatch(addCategory({ name, category }));
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(getContentListSuccess({ name, list: data.results }));
    } catch (error) {
      dispatch(getContentListFailure());
    }
  };
}

export const contentList = (state) => state.contentList;

export default slice.reducer;
