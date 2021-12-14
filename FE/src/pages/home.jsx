/* eslint-disable no-nested-ternary */
import React from 'react';

import { ContentListContainer } from '../component';

import MobileSide from './mobileSide';

const sectionList = [
  {
    name: 'populars',
    title: "What's popular?",
    urls: {
      상영중: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=1`,
      TV: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=1`,
    },
  },
  {
    name: 'trending',
    title: '트렌딩',
    urls: {
      오늘: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
      이번주: `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
    },
  },
];

const ContentListContainers = (sideVisible) => (
  <div className="px-72 mobile:px-0">
    <div
      className={`fixed visible top-20 w-80 min-h-screen z-50 bg-blue-700 opacity-95 ${
        sideVisible === undefined
          ? '-left-80'
          : sideVisible
          ? 'animate-show-side left-0'
          : 'animate-hide-side -left-80'
      }`}
    >
      <MobileSide />
    </div>
    <div className="flex h-80 w-full bg-blue-200">
      <div className="m-auto w-11/12 h-2/4">
        <div className="flex-wrap mb-10">
          <p className="text-4xl">Welcome.</p>
          <p className="text-2xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
        <div className="relative rounded-full bg-white">
          <form action="/search?" className="h-12 w-full">
            <input
              className="px-5 py-3 outline-none rounded-full w-10/12"
              type="text"
              dir="auto"
              name="query"
              placeholder="영화, tv 프로그램 검색..."
            />
            <input
              type="submit"
              value="Search"
              className="absolute h-full rounded-full w-20 right-0 z-10 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
    <div>
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
  </div>
);

export default function home({ sideVisible }) {
  return (
    <div className="pt-20 pb-28">{ContentListContainers(sideVisible)}</div>
  );
}
