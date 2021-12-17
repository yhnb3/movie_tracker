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

import SearchContent from '../search/searchContent';
import { Poster } from '../../component/index';

export default function streamingContainer({ section }) {
  const { loading, hasErrors, data, page, isMount } = useSelector(content);
  const url = `https://api.themoviedb.org/3/tv/${section}?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=${page}`;
  const location = useLocation();

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
        `https://api.themoviedb.org/3/tv/${section}?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=1`,
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
          <div className="h-list">
            <Poster content={element} key={element.id} />
          </div>
        ))}
      </div>
    );
  };
  const headLine = () => {
    if (section === 'popular') {
      return (
        <div className="text-3xl font-bold none mobile:block mobile:text-x">
          인기 TV 프로그램
        </div>
      );
    }
    return (
      <div className="text-3xl font-bold none mobile:block mobile:text-x">
        높은 평점의 인기 TV 프로그램
      </div>
    );
  };

  return (
    <div className="px-72 py-28 mobile:px-5">
      {headLine()}
      <div>{renderContents()}</div>
    </div>
  );
}
