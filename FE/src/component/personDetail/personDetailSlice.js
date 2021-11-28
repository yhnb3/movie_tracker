/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: true,
  isError: false,
  data: {},
};

export const slice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    getPersonDetail: (state) => {
      state.loading = true;
    },
    getPersonDetailSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.isError = false;
    },
    getPersonDetailFailure: (state) => {
      state.loading = false;
      state.isError = true;
    },
  },
});

export const {
  getPersonDetail,
  getPersonDetailFailure,
  getPersonDetailSuccess,
} = slice.actions;

export function fetchPerson(id) {
  return async (dispatch) => {
    dispatch(getPersonDetail());
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=36280866a80b71c69c0131b57e760ee2&language=ko`,
      );
      const data = await response.json();
      console.log(data);
      dispatch(getPersonDetailSuccess(data));
    } catch (error) {
      dispatch(getPersonDetailFailure());
    }
  };
}

export const personDetail = (state) => state.personDetail;

export default slice.reducer;
