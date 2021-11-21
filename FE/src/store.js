import { configureStore } from '@reduxjs/toolkit';
import {
  contentListReducer,
  movieDetailReducer,
  tvDetailReducer,
} from './component/index';

import movieReducer from './pages/contentSlice';
import searchReducer from './pages/search/searchSlice';

export default configureStore({
  reducer: {
    contentList: contentListReducer,
    movieDetail: movieDetailReducer,
    tvDetail: tvDetailReducer,
    content: movieReducer,
    search: searchReducer,
  },
});
