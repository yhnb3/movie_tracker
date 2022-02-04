/* eslint-disable consistent-return */
import React from 'react';
import { useParams } from 'react-router-dom';
import { Detail, MobileDetail } from '../index';

import useFetchData from '../custom/useFetchData.tsx';

export default function MovieDetailContainer() {
  const movieId = useParams();

  const endPoint = `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${process.env.REACT_APP_API_CODE}&language=ko`;

  const { loading, hasErrors, data } = useFetchData({
    endPoint,
  });

  const renderMovie = () => {
    if (loading) return <p>Loading recipes...</p>;
    if (hasErrors) return <p>Cannot display recipes...</p>;

    if (window.innerWidth <= 500) return <MobileDetail content={data} />;
    return <Detail content={data} />;
  };

  return <div className="pt-20 pb-28 min-h-screen">{renderMovie()}</div>;
}
