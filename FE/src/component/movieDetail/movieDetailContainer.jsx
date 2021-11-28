/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, movieDetail } from './movieDetailSlice';
import { Detail } from '../index';

export default function MovieDetailContainer() {
  const dispatch = useDispatch();
  const { loading, hasErrors, movie } = useSelector(movieDetail);
  const movieId = useParams();

  useEffect(() => {
    dispatch(fetchMovies(movieId));
  }, [dispatch]);

  const renderMovie = () => {
    if (loading) return <p>Loading recipes...</p>;
    if (hasErrors) return <p>Cannot display recipes...</p>;
    console.log(movie);
    return <Detail content={movie} />;
  };

  return <div className="pb-28">{renderMovie()}</div>;
}
