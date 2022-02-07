/* eslint-disable no-underscore-dangle */
import React from 'react';
import useSWRInfinite from 'swr/infinite';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import PersonList from './personList';
import InfinityScroll from '../InfinityScroll.tsx';

export default function personContainer({ section }) {
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const getKey = (pageIndex, previousPageData) => {
    if (
      previousPageData &&
      previousPageData.page === previousPageData.total_pages
    )
      return null;
    return `https://api.themoviedb.org/3/person/${section}?api_key=${
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

  return (
    <div>
      <Helmet>
        <title>인기 인물</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="w-screen mx-auto py-28 mobile:px-0 mobile:w-full">
        <InfinityScroll isLoading={isLoading} size={size} setSize={setSize}>
          {data.map((element) => (
            <PersonList key={element.page} persons={element.results} />
          ))}
        </InfinityScroll>
      </div>
    </div>
  );
}
