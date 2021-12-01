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
        `https://api.themoviedb.org/3/tv/${id.id}?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
      );
      const providerResponse = await fetch(
        `https://api.themoviedb.org/3/tv/${id.id}/watch/providers?api_key=${process.env.REACT_APP_API_CODE}`,
      );

      const crewResponse = await fetch(
        `https://api.themoviedb.org/3/tv/${id.id}/credits?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
      );

      const recommendationResponse = await fetch(
        `https://api.themoviedb.org/3/tv/${id.id}/recommendations?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=1`,
      );

      const data = await response.json();
      const provider = await providerResponse.json();
      const crew = await crewResponse.json();
      const recommendation = await recommendationResponse.json();

      data.provider = provider.results.KR;
      data.crew = crew.cast;
      data.recommend = recommendation.results;

      dispatch(getTvDetailSuccess(data));
    } catch (error) {
      dispatch(getTvDetailFailure());
    }
  };
}

export const tvDetail = (state) => state.tvDetail;

export default slice.reducer;
