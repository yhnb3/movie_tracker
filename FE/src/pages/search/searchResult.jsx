import React, { useEffect } from 'react';
import qs from 'qs';
import { debounce } from 'lodash';

import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';

import {
  search,
  fetchSearchResult,
  changePage,
  initPage,
  fetchMoreSearchResult,
  changeIsMount,
} from './searchSlice';
import SearchContent from './searchContent';

export default function serachResult() {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { loading, isError, data, page, endPage, isMount } =
    useSelector(search);
  const url = `https://api.themoviedb.org/3/search/multi?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&query=${query.query}&page=${page}&include_adult=false`;
  const dispatch = useDispatch();

  const handleScroll = (e) => {
    if (
      e.target.scrollingElement.scrollHeight ===
      window.scrollY + window.innerHeight
    ) {
      dispatch(changePage());
    }
  };

  useEffect(() => {
    dispatch(initPage());
    dispatch(fetchSearchResult(url));
  }, [location]);

  useEffect(() => {
    if (!isMount) {
      window.addEventListener(
        'scroll',
        debounce((e) => handleScroll(e), 15),
      );
      dispatch(changeIsMount());
    }
    if (page < endPage) {
      dispatch(fetchMoreSearchResult(url));
    }

    return () => {
      window.removeEventListener(
        'scroll',
        debounce((e) => handleScroll(e), 15),
      );
    };
  }, [page]);

  const render = () => {
    if (loading) return <p>아직 로딩중</p>;
    if (isError)
      return (
        <p>
          데이터를 불러오는 중 오류가 생겼습니다. 잠시후에 다시 시도해보세요.
        </p>
      );
    if (data.length === 0) return <p>검색 결과가 없습니다. </p>;
    return data.map((element) => (
      <SearchContent key={element.id} content={element} />
    ));
  };
  return (
    <div>
      <div className="flex border-b">
        <div className="flex px-72">
          <div className="flex">
            <FaSearch className="w-3 h-3 my-auto mx-3" />
          </div>
          <form action="/search?" className="h-10 w-full">
            <input
              className="text-gray-400 h-full outline-none"
              type="text"
              name="query"
              placeholder="영화, tv 프로그램 검색..."
            />
          </form>
        </div>
      </div>
      <div className="px-48">
        <div>{render()}</div>
      </div>
    </div>
  );
}
