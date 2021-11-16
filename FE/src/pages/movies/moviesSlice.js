/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  page: 1,
  loading: false,
  hasErrors: false,
  data: [],
  newData: [],
};

export const slice = createSlice({
  name: 'content',
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
  },
});

export const {
  getContents,
  getContentsFailure,
  getContentsSuccess,
  getMoreContents,
} = slice.actions;

export function fetchContents(url) {
  return async (dispatch) => {
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
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    dispatch(getMoreContents({ data }));
  };
}

export const content = (state) => state.content;

export default slice.reducer;
