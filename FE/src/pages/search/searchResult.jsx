import React, { useEffect, useState } from 'react';
import qs from 'qs';

import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';

import {
  search,
  fetchSearchResult,
  changePage,
  changeSection,
} from './searchSlice';
import SearchContent from './searchContent';

export default function serachResult() {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { loading, isError, data, currentSection } = useSelector(search);
  const dispatch = useDispatch();

  const [isHover, setIsHover] = useState({
    movie: false,
    tv: false,
    person: false,
  });

  const mouseOn = (section) => {
    setIsHover({ ...isHover, [section]: true });
  };
  const mouseOut = (section) => {
    setIsHover({ ...isHover, [section]: false });
  };

  useEffect(() => {
    dispatch(fetchSearchResult(query.query));
  }, [location]);

  const sectionResulst = () => {
    const results = [
      { section: '영화', name: 'movie', count: data.movie.totalResults },
      { section: 'TV 프로그램', name: 'tv', count: data.tv.totalResults },
      { section: '인물', name: 'person', count: data.person.totalResults },
    ];
    return results.map((element) => (
      <div
        className={`flex justify-between px-4 py-2 ${
          element.name === currentSection || isHover[element.name]
            ? 'bg-gray-200'
            : ''
        }`}
        role="button"
        tabIndex={0}
        onMouseOver={() => mouseOn(element.name)}
        onFocus={() => mouseOn(element.name)}
        onMouseOut={() => mouseOut(element.name)}
        onBlur={() => mouseOut(element.name)}
        onClick={() => dispatch(changeSection({ section: element.name }))}
        onKeyDown={() => dispatch(changeSection({ section: element.name }))}
      >
        <span
          className={`p-1 ${
            element.name === currentSection ? 'font-bold' : ''
          }`}
        >
          {element.section}
        </span>
        <span
          className={`text-xs text-center align-middle my-1.5 rounded-md  ${
            element.name === currentSection || isHover[element.name]
              ? 'bg-white'
              : 'bg-gray-200'
          } w-6`}
        >
          {element.count}
        </span>
      </div>
    ));
  };

  const render = () => {
    if (loading) return <p>아직 로딩중</p>;
    if (isError)
      return (
        <p>
          데이터를 불러오는 중 오류가 생겼습니다. 잠시후에 다시 시도해보세요.
        </p>
      );
    if (data[currentSection].totalResults) {
      return data[currentSection][data[currentSection].currentPage].map(
        (element) => <SearchContent key={element.id} content={element} />,
      );
    }
    return <p>왜 안되지</p>;
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
      <div className="flex flex-row px-72">
        <div className="w-4/12 pt-10 pr-10">
          <div className="rounded-lg border border-gray-200">
            <div className="h-16 w-full bg-blue-400 rounded-t-lg flex items-center">
              <div className="ml-4 text-white font-bold">Search Result</div>
            </div>
            <div className="mt-2 my-5">{sectionResulst()}</div>
          </div>
        </div>
        <div className="w-8/12">
          {currentSection === 'person' ? (
            <p>아직 안만듬</p>
          ) : (
            <div>{render()}</div>
          )}
        </div>
      </div>
    </div>
  );
}
