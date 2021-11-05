/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function NowPlaying({ content }) {
  const posterUrl = `https://image.tmdb.org/t/p/w300/${content.poster_path}`;
  const pathUrl = content.title ? `/movie/${content.id}` : `/tv/${content.id}`;

  const rate = (score) => {
    if (score >= 8)
      return (
        <div className="absolute w-6 h-6 left-1 bottom-1 z-10 bg-green-200 items-center">
          {score * 10}
        </div>
      );
    if (score >= 5)
      return (
        <div className="absolute w-6 h-6 left-1 bottom-1 z-10 bg-blue-200 items-center">
          {score * 10}
        </div>
      );
    return (
      <div className="absolute w-6 h-6 left-1 bottom-1 z-10 bg-red-100 items-center">
        {score * 10}
      </div>
    );
  };

  return (
    <div className="relative h-img w-img m-2 flex-col">
      <Link to={pathUrl}>
        <img
          className="rounded object-cover w-img h-full mx-auto"
          src={posterUrl}
          alt=""
        />
      </Link>
      {rate(content.vote_average)}
    </div>
  );
}
