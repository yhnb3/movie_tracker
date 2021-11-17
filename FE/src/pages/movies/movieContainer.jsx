import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import {
  fetchContents,
  content,
  fecthMoreContents,
  changePage,
  initPage,
  changeIsMount,
} from './moviesSlice';

import { Poster } from '../../component/index';

export default function movieContainer({ section }) {
  const listDiv = useRef();
  const [newPage, setNewPage] = useState(0);

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
    if (newPage === 0 && (page !== 1 || page !== 2)) {
      dispatch(initPage());
    }
    if (isMount) {
      window.addEventListener(
        'scroll',
        debounce((e) => handleScroll(e), 15),
      );
      dispatch(changeIsMount());
    }
    if (page === 1) {
      dispatch(fetchContents(url));
    } else {
      dispatch(fecthMoreContents(url));
      setNewPage(page);
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
      <div className="grid grid-cols-5 px-48" ref={listDiv}>
        {renderContents()}
      </div>
    </div>
  );
}
