/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, movieDetail } from './movieDetailSlice';
import { Detail } from '../index';

export default function MovieDetailContainer() {
  const dispatch = useDispatch();
  const { loading, hasErrors, movie } = useSelector(movieDetail);
  const movieId = useParams();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchMovies(movieId));
  }, [location]);

  const renderMovie = () => {
    if (loading) return <p>Loading recipes...</p>;
    if (hasErrors) return <p>Cannot display recipes...</p>;

    return <Detail content={movie} />;
  };

  return <div className="pt-20 pb-28">{renderMovie()}</div>;
}
