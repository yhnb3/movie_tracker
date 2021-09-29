import { configureStore } from '@reduxjs/toolkit';
import nowPlayingReducer from './reducer/nowPlayingSlice';

export default configureStore({
  reducer: {
    nowPlaying: nowPlayingReducer,
  },
});
