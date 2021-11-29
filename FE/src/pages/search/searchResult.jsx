import React, { useEffect, useState } from 'react';
import qs from 'qs';

import { useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';

import {
  search,
  fetchSearchResult,
  fetchMoreSearchResult,
  changePage,
  changeSection,
  changeIsMount,
} from './searchSlice';
import SearchContent from './searchContent';
import Pagination from './pagination';

export default function searchResult() {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { loading, isError, data, currentSection, isMount, currentPage } =
    useSelector(search);
  const dispatch = useDispatch();

  const [isHover, setIsHover] = useState({
    movie: false,
    tv: false,
    person: false,
  });

  useEffect(() => {
    if (!isMount) {
      dispatch(fetchSearchResult(query.query));
      dispatch(changeIsMount());
    } else if (data[currentSection][currentPage] === undefined) {
      dispatch(
        fetchMoreSearchResult({
          section: currentSection,
          query: query.query,
          page: currentPage,
        }),
      );
    }
  }, [location, currentPage]);

  const mouseOn = (section) => {
    setIsHover({ ...isHover, [section]: true });
  };
  const mouseOut = (section) => {
    setIsHover({ ...isHover, [section]: false });
  };

  const sectionResulst = () => {
    const results = [
      { section: '영화', name: 'movie', count: data.movie.totalResults },
      { section: 'TV 프로그램', name: 'tv', count: data.tv.totalResults },
      { section: '인물', name: 'person', count: data.person.totalResults },
    ];
    return results.map((element) => (
      <div
        key={element.name}
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

  const contentResult = () => {
    if (loading) return <p>아직 로딩중</p>;
    if (isError)
      return (
        <p>
          데이터를 불러오는 중 오류가 생겼습니다. 잠시후에 다시 시도해보세요.
        </p>
      );
    if (
      data[currentSection].totalResults &&
      data[currentSection][currentPage]
    ) {
      return (
        <div>
          {data[currentSection][currentPage].map((element) => (
            <SearchContent key={element.id} content={element} />
          ))}
          {data[currentSection].totalPage > 1 ? (
            <Pagination
              page={currentPage}
              totalPage={data[currentSection].totalPage}
              section={currentSection}
              onChangePage={(newPage) =>
                dispatch(changePage({ section: currentSection, page: newPage }))
              }
            />
          ) : (
            <></>
          )}
        </div>
      );
    }
    return <p>왜 안되지</p>;
  };
  const personResult = () => {
    if (loading) return <p>아직 로딩중</p>;
    if (isError)
      return (
        <p>
          데이터를 불러오는 중 오류가 생겼습니다. 잠시후에 다시 시도해보세요.
        </p>
      );
    if (
      data[currentSection].totalResults &&
      data[currentSection][currentPage]
    ) {
      return (
        <div className="mt-10">
          {data[currentSection][currentPage].map((element) => (
            <div className="flex flex-row mt-5 h-full" key={element.id}>
              <Link to={`/person/${element.id}`}>
                <img
                  className="w-20 h-20 object-cover object-center rounded-md"
                  src={`https://image.tmdb.org/t/p/w300/${element.profile_path}`}
                  alt={element.name}
                />
              </Link>

              <div className="flex flex-col justify-center ml-5">
                <p className="text-xl font-bold">{element.name}</p>
                <div className="flex flex-row">
                  <p>{element.known_for_department}</p>
                  <div className="flex items-center">
                    <BsDot />
                  </div>
                  {element.known_for.map((content, idx) => {
                    const title = content.title || content.name;
                    return (
                      <div key={title}>
                        <Link
                          to={
                            content.title
                              ? `/movie/${content.id}`
                              : `/tv/${content.id}`
                          }
                        >
                          {idx === element.known_for.length - 1 ? (
                            <p>{title}</p>
                          ) : (
                            <p className="mr-2">
                              {title}
                              {', '}
                            </p>
                          )}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
          {data[currentSection].totalPage > 1 ? (
            <Pagination
              page={currentPage}
              totalPage={data[currentSection].totalPage}
              section={currentSection}
              onChangePage={(newPage) =>
                dispatch(changePage({ section: currentSection, page: newPage }))
              }
            />
          ) : (
            <></>
          )}
        </div>
      );
    }
    return <p>오류가 발생했습니다. 다시 시도해보세요.</p>;
  };

  return (
    <div className="pb-28">
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
            <div>{personResult()}</div>
          ) : (
            <div>{contentResult()}</div>
          )}
        </div>
      </div>
    </div>
  );
}
