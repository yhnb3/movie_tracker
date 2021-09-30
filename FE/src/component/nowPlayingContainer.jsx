import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, nowPlaying } from '../reducer/nowPlayingSlice';
import NowPlaying from './nowPlaying';

export default function NowPlayingContainer() {
  const dispatch = useDispatch();
  const { loading, hasErrors, movies } = useSelector(nowPlaying);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const renderMovies = () => {
    if (loading) return <p>Loading recipes...</p>;
    if (hasErrors) return <p>Cannot display recipes...</p>;

    return movies.map((movie) => <NowPlaying movie={movie} key={movie.id} />);
  };

  return <div>{renderMovies()}</div>;
}
