import { configureStore } from '@reduxjs/toolkit';
import nowPlayingReducer from './reducer/nowPlayingSlice';
import movieDetailReducer from './reducer/movieDetailSlice';

export default configureStore({
  reducer: {
    nowPlaying: nowPlayingReducer,
    movieDetail: movieDetailReducer,
  },
});
