import { configureStore } from '@reduxjs/toolkit';
import {
  contentListReducer,
  movieDetailReducer,
  tvDetailReducer,
  personDetailReducer,
} from './component/index';

import movieReducer from './pages/contentSlice';
import searchReducer from './pages/search/searchSlice';
import personReducer from './pages/person/personSlice';

export default configureStore({
  reducer: {
    contentList: contentListReducer,
    movieDetail: movieDetailReducer,
    tvDetail: tvDetailReducer,
    personDetail: personDetailReducer,
    content: movieReducer,
    search: searchReducer,
    person: personReducer,
  },
});
