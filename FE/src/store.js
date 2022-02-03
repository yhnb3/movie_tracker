import { configureStore } from '@reduxjs/toolkit';
import { contentListReducer } from './component/index';

import movieReducer from './pages/contentSlice';
import searchReducer from './pages/search/searchSlice';
import personReducer from './pages/person/personSlice';

export default configureStore({
  reducer: {
    contentList: contentListReducer,
    content: movieReducer,
    search: searchReducer,
    person: personReducer,
  },
});
