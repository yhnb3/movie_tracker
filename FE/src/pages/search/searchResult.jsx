import React, { useState } from 'react';
import qs from 'qs';
import useSWRInfinite from 'swr/infinite';
import axios from 'axios';

import { useLocation, Link } from 'react-router-dom';
import { FaSearch } from '@react-icons/all-files/fa/FaSearch';
import { BsDot } from '@react-icons/all-files/bs/BsDot';

import { Helmet } from 'react-helmet';
import Pagination from './pagination';
import ContentSearchResult from './ContentSerachResult.tsx';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function searchResult() {
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const [currentSection, setCurrentSection] = useState('movie');

  const {
    data: personData,
    error: personError,
    size: personCurrentPage,
    setSize: personSetCurrentPage,
  } = useSWRInfinite((pageIndex, previousPageData) => {
    if (
      previousPageData &&
      previousPageData.page === previousPageData.total_pages
    )
      return null;
    return `https://api.themoviedb.org/3/search/person?api_key=${
      process.env.REACT_APP_API_CODE
    }&language=ko&query=${query.query}&page=${
      pageIndex + 1
    }&include_adult=false`;
  }, fetcher);

  const {
    data: tvData,
    error: tvError,
    size: tvCurrentPage,
    setSize: tvSetCurrentPage,
  } = useSWRInfinite((pageIndex, previousPageData) => {
    if (
      previousPageData &&
      previousPageData.page === previousPageData.total_pages
    )
      return null;
    return `https://api.themoviedb.org/3/search/tv?api_key=${
      process.env.REACT_APP_API_CODE
    }&language=ko&query=${query.query}&page=${
      pageIndex + 1
    }&include_adult=false`;
  }, fetcher);

  const {
    data: movieData,
    error: movieError,
    size: movieCurrentPage,
    setSize: movieSetCurrentPage,
  } = useSWRInfinite((pageIndex, previousPageData) => {
    if (
      previousPageData &&
      previousPageData.page === previousPageData.total_pages
    )
      return null;
    return `https://api.themoviedb.org/3/search/movie?api_key=${
      process.env.REACT_APP_API_CODE
    }&language=ko&query=${query.query}&page=${
      pageIndex + 1
    }&include_adult=false`;
  }, fetcher);

  const initialTvLoading = !tvError && !tvData;
  const initialPersonLoading = !personError && !personData;
  const initialMovieLoading = !movieError && !movieData;

  const tvLoading =
    initialTvLoading ||
    (tvCurrentPage > 0 &&
      tvData &&
      typeof tvData[tvCurrentPage - 1] === 'undefined');

  const personLoading =
    initialPersonLoading ||
    (personCurrentPage > 0 &&
      personData &&
      typeof personData[personCurrentPage - 1] === 'undefined');

  const movieLoading =
    initialMovieLoading ||
    (movieCurrentPage > 0 &&
      movieData &&
      typeof movieData[movieCurrentPage - 1] === 'undefined');

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

  const sectionResulst = () => {
    const results = [
      { section: '영화', name: 'movie', count: movieData[0].total_results },
      { section: 'TV 프로그램', name: 'tv', count: tvData[0].total_results },
      { section: '인물', name: 'person', count: personData[0].total_results },
    ];

    return results.map((element) => (
      <div
        key={element.name}
        className={`flex justify-between px-4 py-2 ${
          element.name === currentSection || isHover[element.name]
            ? 'bg-gray-200 mobile:text-blue-400 mobile:bg-transparent'
            : ''
        }`}
        role="button"
        tabIndex={0}
        onMouseOver={() => mouseOn(element.name)}
        onFocus={() => mouseOn(element.name)}
        onMouseOut={() => mouseOut(element.name)}
        onBlur={() => mouseOut(element.name)}
        onClick={() => setCurrentSection(element.name)}
        onKeyDown={() => setCurrentSection(element.name)}
      >
        <span
          className={`p-1 ${
            element.name === currentSection ? 'font-bold' : ''
          }`}
        >
          {element.section}
        </span>
        <span
          className={`text-xs text-center align-middle my-1.5 rounded-md mobile:border text-black ${
            element.name === currentSection || isHover[element.name]
              ? 'bg-white mobile:border-blue-400'
              : 'bg-gray-200 mobile:bg-white'
          } w-6`}
        >
          {element.count}
        </span>
      </div>
    ));
  };
  const personResult = () => {
    if (personData[personCurrentPage - 1].results.length > 0) {
      return (
        <div className="mt-10">
          {personData[personCurrentPage - 1].results.map((element) => (
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
          {personData[0].totalPage > 1 ? (
            <Pagination
              page={personCurrentPage}
              totalPage={personData[0].total_pages}
              onChangePage={(page) => personSetCurrentPage(page)}
            />
          ) : (
            <></>
          )}
        </div>
      );
    }
    return <p>검색결과가 없습니다.</p>;
  };

  const Result = () => {
    if (currentSection === 'person') {
      if (personLoading) return <p>로딩중...</p>;
      return personResult();
    }
    if (currentSection === 'tv') {
      if (tvLoading) return <p>로딩중...</p>;
      return (
        <ContentSearchResult
          contents={tvData[tvCurrentPage - 1].results}
          currentPage={tvCurrentPage}
          totalPage={tvData[0].total_pages}
          setCurrentPage={tvSetCurrentPage}
        />
      );
    }
    if (movieLoading) return <p>로딩중...</p>;
    return (
      <ContentSearchResult
        contents={movieData[movieCurrentPage - 1].results}
        currentPage={movieCurrentPage}
        totalPage={movieData[0].total_pages}
        setCurrentPage={movieSetCurrentPage}
      />
    );
  };

  if (initialTvLoading || initialPersonLoading || initialMovieLoading)
    return <p>로딩 중...</p>;
  if (tvError || personError || movieError) return <p>에러...</p>;

  return (
    <div className="pb-28 pt-20">
      <Helmet>
        <title>{query.query}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="flex border-b">
        <div className="flex w-screen mx-auto mobile:w-full">
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
      <div className="flex flex-row w-screen mx-auto mobile:flex-col mobile:w-full">
        <div className="w-4/12 pt-10 pr-10 mobile:w-full mobile:p-0">
          <div className="rounded-lg border border-gray-200 mobile:rounded-none">
            <div className="h-16 w-full bg-blue-400 rounded-t-lg flex items-center mobile:rounded-none">
              <div className="ml-4 text-white font-bold">Search Result</div>
            </div>
            <div>
              <div className="mt-2 my-5 mobile:flex-row mobile:flex mobile:my-0">
                {sectionResulst()}
              </div>
            </div>
          </div>
        </div>
        <div className="w-8/12 mobile:w-full mobile:px-5">
          <Result />
        </div>
      </div>
    </div>
  );
}
