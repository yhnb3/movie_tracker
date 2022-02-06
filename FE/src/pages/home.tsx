/* eslint-disable no-nested-ternary */
import * as React from "react";
import {Helmet} from 'react-helmet'

import { ContentListContainer } from '../component';

interface Section {
  name: string,
  title: string,
  target: string,
  urls: {
    상영중: string,
    TV: string
  } | {
    오늘: string,
    이번주: string
  }
}

const sectionList : Array<Section> = [
  {
    name: 'populars',
    title: "What's popular?",
    target: "상영중",
    urls: {
      상영중: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=1`,
      TV: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=1`,
    },
  },
  {
    name: 'trending',
    title: '트렌딩',
    target: "오늘",
    urls: {
      오늘: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
      이번주: `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
    },
  },
];

const ContentLists = () => (
  <div>
    {sectionList.map((sectionItem) => (
      <ContentListContainer
        key={sectionItem.name}
        target={sectionItem.target}
        title={sectionItem.title}
        urls={sectionItem.urls}
        name={sectionItem.name}
        categories={Object.keys(sectionItem.urls)}
      />
    ))}
  </div>
);

const ContentListContainers = () => (
  <div className="pt-20 pb-28 mobile:pt-10">
    <Helmet>
      <title>TMDB BY KANGWOO</title>
      <meta name="description" content="Helmet application" />
    </Helmet>
    <div className="mx-auto w-screen mobile:mx-0 mobile:w-full">
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
      <ContentLists />
    </div>
  </div>
);

export default function Home() {
  return <ContentListContainers />;
}
