import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, nowPlaying } from '../reducer/nowPlayingSlice';

export default function NowPlaying() {
  const dispatch = useDispatch();
  const { loading, hasErrors, movies } = useSelector(nowPlaying);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  const renderMovies = () => {
    if (loading) return <p>Loading recipes...</p>;
    if (hasErrors) return <p>Cannot display recipes...</p>;

    console.log(movies);
    return (
      <div className="m-5 bg-yellow-500 text-blue-500 font-bold">
        안녕하세요
      </div>
    );
  };

  return <div>{renderMovies()}</div>;
}
