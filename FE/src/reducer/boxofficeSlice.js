import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'boxOffice',
  initialState: {
    data: {},
  },
  reducers: {
    getBoxOfficeMovies: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getBoxOfficeMovies } = slice.actions;

export const getAsyncBoxOfficeMovies = () => (dispatch) => {
  setTimeout(() => {
    dispatch(getBoxOfficeMovies({ name: 'DP' }));
  }, 1000);
};

export const boxOfficeMovies = (state) => state.boxOffice;

export default slice.reducer;
