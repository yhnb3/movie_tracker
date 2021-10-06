import React from 'react';
import { ContentListContainer } from '../index';

export default function Home() {
  return (
    <div>
      <ContentListContainer
        url="https://api.themoviedb.org/3/movie/now_playing?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&page=1"
        category="nowPlayingMovie"
      />
      <ContentListContainer
        url="https://api.themoviedb.org/3/tv/popular?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&page=1"
        category="popularTv"
      />
    </div>
  );
}
