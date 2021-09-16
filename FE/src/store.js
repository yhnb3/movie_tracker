import { configureStore } from '@reduxjs/toolkit';
import boxOfficeReducer from './reducer/boxofficeSlice';

export default configureStore({
  reducer: {
    boxOffice: boxOfficeReducer,
  },
});
