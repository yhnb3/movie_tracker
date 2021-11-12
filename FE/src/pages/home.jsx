import React from 'react';

import { ContentListContainer } from '../component';

const sectionList = [
  {
    name: 'populars',
    title: "What's popular?",
    urls: {
      Movie:
        'https://api.themoviedb.org/3/movie/popular?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&page=1',
      Tv: 'https://api.themoviedb.org/3/tv/popular?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&page=1',
    },
  },
  {
    name: 'trending',
    title: '트렌딩',
    urls: {
      오늘: 'https://api.themoviedb.org/3/trending/all/day?api_key=36280866a80b71c69c0131b57e760ee2',
      이번주:
        'https://api.themoviedb.org/3/trending/all/week?api_key=36280866a80b71c69c0131b57e760ee2',
    },
  },
];

const ContentListContainers = () => (
  <div className="px-48">
    {sectionList.map((sectionItem) => (
      <ContentListContainer
        key={sectionItem.name}
        title={sectionItem.title}
        urls={sectionItem.urls}
        name={sectionItem.name}
        categories={Object.keys(sectionItem.urls)}
      />
    ))}
  </div>
);

export default function home() {
  return <div>{ContentListContainers()}</div>;
}
