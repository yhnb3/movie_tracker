/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: true,
  hasErrors: false,
  tv: {},
};

export const slice = createSlice({
  name: 'tvDetail',
  initialState,
  reducers: {
    getTvDetail: (state) => {
      state.loading = true;
    },
    getTvDetailSuccess: (state, { payload }) => {
      state.tv = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getTvDetailFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getTvDetail, getTvDetailFailure, getTvDetailSuccess } =
  slice.actions;

export function fetchTv(id) {
  return async (dispatch) => {
    dispatch(getTvDetail());
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id.id}?api_key=36280866a80b71c69c0131b57e760ee2&language=ko`,
      );
      const providerResponse = await fetch(
        `https://api.themoviedb.org/3/tv/${id.id}/watch/providers?api_key=36280866a80b71c69c0131b57e760ee2`,
      );
      const data = await response.json();
      const provider = await providerResponse.json();
      data.provider = provider.results.KR;

      dispatch(getTvDetailSuccess(data));
    } catch (error) {
      dispatch(getTvDetailFailure());
    }
  };
}

export const tvDetail = (state) => state.tvDetail;

export default slice.reducer;
