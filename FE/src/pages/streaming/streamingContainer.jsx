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
  changePath,
} from '../contentSlice';

import { Poster } from '../../component/index';

export default function streamingContainer({ section }) {
  const { loading, hasErrors, data, page, isMount, path } =
    useSelector(content);
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
    console.log(path);
    dispatch(changePath(location.pathname));
  });

  useEffect(() => {
    console.log(path);
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

  const renderContents = () => {
    if (loading) return <p>loading....</p>;
    if (hasErrors) return <p>api error page</p>;

    return data.map((element) => (
      <div className="h-list">
        <Poster content={element} key={element.id} />
      </div>
    ));
  };

  return (
    <div>
      <div className="grid grid-cols-5 px-72 py-28">{renderContents()}</div>
    </div>
  );
}
