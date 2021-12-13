import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { useLocation } from 'react-router-dom';
import {
  fetchContents,
  person,
  fecthMoreContents,
  changePage,
  initPage,
  changeIsMount,
  changePath,
} from './personSlice';

import PersonList from './personList';
import CategoryLoading from '../categoryLoading';

export default function personContainer({ section }) {
  const { loading, hasErrors, data, page, isMount, path } = useSelector(person);
  const url = `https://api.themoviedb.org/3/person/${section}?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=${page}`;
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
    console.log(path);
    dispatch(changePath(location.pathname));
  });

  useEffect(() => {
    dispatch(initPage());
    dispatch(fetchContents(url));
  }, [path]);

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

  const render = () => {
    if (loading) return <CategoryLoading />;
    if (hasErrors) return <p>api error page</p>;
    return <PersonList persons={data} />;
  };

  return (
    <div>
      <div className="px-72 py-28">{render()}</div>
    </div>
  );
}
