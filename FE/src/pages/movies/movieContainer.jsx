import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContents, content, fecthMoreContents } from './moviesSlice';

import { Poster } from '../../component/index';

export default function movieContainer({ section }) {
  const listDiv = useRef();
  const [page, setPage] = useState(1);

  const { loading, hasErrors, data } = useSelector(content);
  const url = `https://api.themoviedb.org/3/movie/${section}?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&page=${page}`;

  const dispatch = useDispatch();

  const handleScroll = (e) => {
    const element = e.target;
    console.log(element);
    // if (element.scrollTop + window.innerHeight >= element.scrollHeight) {
    //   console.log(element.scrollTop, window.innerHeight, element.scrollHeight);
    //   setPage(page + 1);
    // }
  };

  useEffect(() => {
    listDiv.current.addEventListener('scroll', (e) => handleScroll(e));
    if (page === 1) {
      dispatch(fetchContents(url));
    } else {
      dispatch(fecthMoreContents(url));
    }
    console.log(page);
  }, [page]);

  const renderContents = () => {
    if (loading) return <p>loading....</p>;
    if (hasErrors) return <p>api error page</p>;

    return data.map((element) => <Poster content={element} key={element.id} />);
  };

  return (
    <div>
      <div
        className="grid grid-cols-5 px-48"
        onScroll={(e) => handleScroll(e)}
        ref={listDiv}
      >
        {renderContents()}
      </div>
      <button
        type="button"
        onClick={() => {
          setPage(page + 1);
        }}
      >
        페이지 바꾸기
      </button>
    </div>
  );
}
