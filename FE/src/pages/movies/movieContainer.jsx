import React from 'react';
import useSWRInfinite from 'swr/infinite';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import { Poster } from '../../component/index';
import SearchContent from '../search/searchContent';
import InfinityScroll from '../InfinityScroll.tsx';

export default function movieContainer({ section }) {
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const getKey = (pageIndex, previousPageData) => {
    if (
      previousPageData &&
      previousPageData.page === previousPageData.total_pages
    )
      return null;
    return `https://api.themoviedb.org/3/movie/${section}?api_key=${
      process.env.REACT_APP_API_CODE
    }&language=ko&page=${pageIndex + 1}`;
  };

  const {
    data = [],
    error,
    size,
    setSize,
  } = useSWRInfinite(getKey, fetcher, { focusThrottleInterval: 1000 });

  const isLoading = !data && !error;

  const renderContents = () => {
    if (window.innerWidth <= 500) {
      return data.map((contents) =>
        contents.results.map((element) => <SearchContent content={element} />),
      );
    }
    return (
      <div className="grid grid-cols-5 pt-10">
        {data.map((contents) =>
          contents.results.map((element) => (
            <div>
              <div className="h-list">
                <Poster content={element} key={element.id} />
              </div>
            </div>
          )),
        )}
      </div>
    );
  };
  const headLine = () => {
    if (section === 'popular') {
      return (
        <div className="text-3xl font-bold none mobile:block mobile:text-xl">
          <Helmet>
            <title>인기 영화</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          인기 영화
        </div>
      );
    }
    if (section === 'top_rated') {
      return (
        <div className="text-3xl font-bold none mobile:block mobile:text-xl">
          <Helmet>
            <title>높은 평점의 인기 영화</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          높은 평점의 인기 영화
        </div>
      );
    }
    return (
      <div className="text-3xl font-bold none mobile:block mobile:text-xl">
        <Helmet>
          <title>현재 상영 영화</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        현재 상영 영화
      </div>
    );
  };

  console.log(data);
  return (
    <div className="mx-auto w-screen pt-30 py-28 mobile:px-5 mobile:w-full">
      {headLine()}
      <InfinityScroll isLoading={isLoading} size={size} setSize={setSize}>
        {renderContents()}
      </InfinityScroll>
    </div>
  );
}
