/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, movieDetail } from '../reducer/movieDetailSlice';
import MovieDetail from './movieDetail';

export default function NowPlayingContainer() {
  const dispatch = useDispatch();
  const { loading, hasErrors, movie } = useSelector(movieDetail);
  const movieId = useParams();

  useEffect(() => {
    dispatch(fetchMovies(movieId));
  }, [dispatch]);

  const renderMovie = () => {
    if (loading) return <p>Loading recipes...</p>;
    if (hasErrors) return <p>Cannot display recipes...</p>;

    return <MovieDetail movie={movie} />;
  };

  return <div>{renderMovie()}</div>;
}
