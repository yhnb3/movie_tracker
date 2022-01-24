/* eslint-disable consistent-return */
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovies, movieDetail } from './movieDetailSlice';
import { Detail, MobileDetail } from '../index';

import useFetchData from '../custom/useFetchData.tsx';

export default function MovieDetailContainer() {
  const movieId = useParams();
  const location = useLocation();
  const { loading, hasErrors, data } = useFetchData({
    target: movieDetail,
    id: movieId,
    location,
    patchData: fetchMovies,
  });

  const renderMovie = () => {
    if (loading) return <p>Loading recipes...</p>;
    if (hasErrors) return <p>Cannot display recipes...</p>;

    if (window.innerWidth <= 500) return <MobileDetail content={data} />;
    return <Detail content={data} />;
  };

  return <div className="pt-20 pb-28 min-h-screen">{renderMovie()}</div>;
}
