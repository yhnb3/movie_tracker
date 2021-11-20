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

export default function movieContainer({ section }) {
  const location = useLocation();

  const { loading, hasErrors, data, page, isMount } = useSelector(content);
  const url = `https://api.themoviedb.org/3/movie/${section}?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&page=${page}`;

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
    dispatch(fetchContents(url));
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

    return data.map((element) => <Poster content={element} key={element.id} />);
  };

  return (
    <div>
      <div className="grid grid-cols-5 px-48">{renderContents()}</div>
    </div>
  );
}
