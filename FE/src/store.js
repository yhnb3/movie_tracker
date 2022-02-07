import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './pages/search/searchSlice';

export default configureStore({
  reducer: {
    search: searchReducer,
  },
});
