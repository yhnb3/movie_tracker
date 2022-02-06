import { configureStore } from '@reduxjs/toolkit';

import movieReducer from './pages/contentSlice';
import searchReducer from './pages/search/searchSlice';
import personReducer from './pages/person/personSlice';

export default configureStore({
  reducer: {
    content: movieReducer,
    search: searchReducer,
    person: personReducer,
  },
});
