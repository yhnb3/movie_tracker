import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContents, content } from './moviesSlice';

import { Poster } from '../../component/index';

export default function movieContainer({ section }) {
  const page = 1;
  const url = `https://api.themoviedb.org/3/movie/${section}?api_key=36280866a80b71c69c0131b57e760ee2&language=ko&page=${page}`;

  const { loading, hasErrors, data } = useSelector(content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContents(url));
  }, []);

  const renderContents = () => {
    if (loading) return <p>loading....</p>;
    if (hasErrors) return <p>api error page</p>;

    console.log(data);
    return data.map((element) => <Poster content={element} key={element.id} />);
  };

  return <div className="grid grid-cols-5 px-48">{renderContents()}</div>;
}
