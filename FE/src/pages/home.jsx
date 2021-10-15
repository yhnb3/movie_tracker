import React from 'react';

import { ContentListContainer } from '../component';

const sectionList = [
  {
    name: 'populars',
    urls: {
      movie:
        'https://api.themoviedb.org/3/movie/popular?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&page=1',
      tv: 'https://api.themoviedb.org/3/tv/popular?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&page=1',
    },
  },
  {
    name: 'top_rated',
    urls: {
      movie:
        'https://api.themoviedb.org/3/movie/top_rated?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&page=1',
      tv: 'https://api.themoviedb.org/3/tv/top_rated?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&page=1',
    },
  },
  {
    name: 'trending',
    urls: {
      day: 'https://api.themoviedb.org/3/trending/all/day?api_key=36280866a80b71c69c0131b57e760ee2',
      week: 'https://api.themoviedb.org/3/trending/all/week?api_key=36280866a80b71c69c0131b57e760ee2',
    },
  },
];

const ContentListContainers = () => (
  <div className="px-48">
    {sectionList.map((sectionItem) => (
      <ContentListContainer
        key={sectionItem.name}
        urls={sectionItem.urls}
        name={sectionItem.name}
        categories={Object.keys(sectionItem.urls)}
      />
    ))}
  </div>
);

export default function home() {
  return (
    <div>
      {ContentListContainers()}
      {/* <ContentListContainer
        url="https://api.themoviedb.org/3/movie/now_playing?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&page=1"
        category="nowPlayingMovie"
      />
      <ContentListContainer
        url="https://api.themoviedb.org/3/tv/popular?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&page=1"
        category="popularTv"
      /> */}
    </div>
  );
}
