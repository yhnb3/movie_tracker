/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  page: 1,
  isMount: true,
  loading: false,
  hasErrors: false,
  data: [],
};

export const slice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    getContents: (state) => {
      state.loading = true;
    },
    getContentsSuccess: (state, { payload }) => {
      state.data = payload.data.results;
      state.loading = false;
      state.hasErrors = false;
    },
    getContentsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    getMoreContents: (state, { payload }) => {
      state.data = state.data.concat(payload.data.results);
      state.loading = false;
      state.hasErrors = false;
    },
    changePage: (state) => {
      state.page += 1;
    },
    initPage: (state) => {
      state.page = 1;
      state.data = [];
    },
    changeIsMount: (state) => {
      state.isMount = false;
    },
  },
});

export const {
  getContents,
  getContentsFailure,
  getContentsSuccess,
  getMoreContents,
  changePage,
  initPage,
  changeIsMount,
} = slice.actions;

export function fetchContents(url) {
  return async (dispatch) => {
    console.log(url);
    dispatch(getContents(url));
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(getContentsSuccess({ data }));
    } catch (error) {
      dispatch(getContentsFailure());
    }
  };
}

export function fecthMoreContents(url) {
  return async (dispatch) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(getMoreContents({ data }));
  };
}

export const person = (state) => state.person;

export default slice.reducer;
