import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { useLocation } from 'react-router-dom';
import {
  fetchContents,
  content,
  fecthMoreContents,
  changePage,
  initPage,
  changeIsMount,
} from '../contentSlice';

import { Poster } from '../../component/index';
import SearchContent from '../search/searchContent';

export default function movieContainer({ section }) {
  const location = useLocation();

  const { loading, hasErrors, data, page, isMount } = useSelector(content);
  const url = `https://api.themoviedb.org/3/movie/${section}?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=${page}`;

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
    dispatch(
      fetchContents(
        `https://api.themoviedb.org/3/movie/${section}?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=1`,
      ),
    );
  }, [location]);

  useEffect(() => {
    if (isMount) {
      window.addEventListener(
        'scroll',
        debounce((e) => handleScroll(e), 15),
      );
      dispatch(changeIsMount());
    }
    if (page > 1) {
      dispatch(fecthMoreContents(url));
    }

    return () => {
      window.removeEventListener(
        'scroll',
        debounce((e) => handleScroll(e), 15),
      );
    };
  }, [page]);

  const renderContents = () => {
    if (loading) return <p>loading....</p>;
    if (hasErrors) return <p>api error page</p>;

    if (window.innerWidth <= 500) {
      return data.map((element) => <SearchContent content={element} />);
    }
    return (
      <div className="grid grid-cols-5 pt-10">
        {data.map((element) => (
          <div>
            <div className="h-list">
              <Poster content={element} key={element.id} />
            </div>
          </div>
        ))}
      </div>
    );
  };
  const headLine = () => {
    if (section === 'popular') {
      return (
        <div className="text-3xl font-bold none mobile:block mobile:text-xl">
          인기 영화
        </div>
      );
    }
    if (section === 'top_rated') {
      return (
        <div className="text-3xl font-bold none mobile:block mobile:text-xl">
          높은 평점의 인기 영화
        </div>
      );
    }
    return (
      <div className="text-3xll font-bold none mobile:block mobile:text-xl">
        현재 상영 영화
      </div>
    );
  };
  return (
    <div className="px-72 pt-30 py-28 mobile:px-5">
      {headLine()}
      <div>{renderContents()}</div>
    </div>
  );
}
