import { configureStore } from '@reduxjs/toolkit';
import {
  contentListReducer,
  movieDetailReducer,
  tvDetailReducer,
} from './component/index';

export default configureStore({
  reducer: {
    contentList: contentListReducer,
    movieDetail: movieDetailReducer,
    tvDetail: tvDetailReducer,
  },
});
