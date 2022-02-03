/* eslint-disable consistent-return */
import React from 'react';
import { useParams } from 'react-router-dom';
import { Detail, MobileDetail } from '../index';

import useFetchData from '../custom/useFetchData.tsx';

export default function MovieDetailContainer() {
  const movieId = useParams();

  const urls = [
    `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
    `https://api.themoviedb.org/3/movie/${movieId.id}/videos?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
    `https://api.themoviedb.org/3/movie/${movieId.id}/watch/providers?api_key=${process.env.REACT_APP_API_CODE}`,
    `https://api.themoviedb.org/3/movie/${movieId.id}/credits?api_key=${process.env.REACT_APP_API_CODE}&language=ko`,
    `https://api.themoviedb.org/3/movie/${movieId.id}/recommendations?api_key=${process.env.REACT_APP_API_CODE}&language=ko&page=1`,
  ];

  const { loading, hasErrors, data } = useFetchData({
    urls,
  });

  const renderMovie = () => {
    if (loading) return <p>Loading recipes...</p>;
    if (hasErrors) return <p>Cannot display recipes...</p>;

    const [handlingData, video, provider, crew, recommend] = data;
    handlingData.video = video;
    handlingData.provier = provider.results.KR;
    handlingData.cast = crew.cast;
    handlingData.crew = crew.crew;
    handlingData.recommend = recommend.results;

    if (window.innerWidth <= 500)
      return <MobileDetail content={handlingData} />;
    return <Detail content={handlingData} />;
  };

  return <div className="pt-20 pb-28 min-h-screen">{renderMovie()}</div>;
}
