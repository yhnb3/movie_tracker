import React, { useEffect } from 'react';
import qs from 'qs';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { search, fetchSearchResult } from './searchSlice';

export default function serachResult() {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const url = `https://api.themoviedb.org/3/search/multi?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&query=${query.query}&page=1&include_adult=false`;

  const { loading, isError, data } = useSelector(search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchResult(url));
  }, [location]);

  const render = () => {
    if (loading) return <p>아직 로딩중</p>;
    if (isError)
      return (
        <p>
          데이터를 불러오는 중 오류가 생겼습니다. 잠시후에 다시 시도해보세요.
        </p>
      );
    return data.map((element) => <p key={element.id}>{element.title}</p>);
  };
  return (
    <div className="px-48">
      <div>
        <form action="/search?" className="h-10 w-full">
          <input
            className="text-gray-400 h-full"
            type="text"
            dir="auto"
            value={query.query}
            placeholder="영화, tv 프로그램 검색..."
          />
        </form>
      </div>
      <div>{render()}</div>
    </div>
  );
}
