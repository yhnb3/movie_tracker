/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: true,
  hasErrors: false,
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
      state.hasErrors = false;
    },
    getPersonDetailFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
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
        `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
      );
      const creditResponse = await fetch(
        `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
      );
      const socialResponse = await fetch(
        `https://api.themoviedb.org/3/person/${id}/external_ids?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
      );

      const creditData = await creditResponse.json();
      const socialData = await socialResponse.json();
      const data = await response.json();

      data.credit = creditData;
      data.social = socialData;
      dispatch(getPersonDetailSuccess(data));
    } catch (error) {
      dispatch(getPersonDetailFailure());
    }
  };
}

export const personDetail = (state) => state.personDetail;

export default slice.reducer;
