/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import RateCircle from './rateCircle';

export default function poster({ content }) {
  const posterUrl = `https://image.tmdb.org/t/p/w300/${content.poster_path}`;
  const pathUrl = content.title ? `/movie/${content.id}` : `/${content.id}`;

  const rate = (score) => {
    let color = 'green';

    if (score < 7) {
      color = 'yellow';
    }

    if (score < 4) {
      color = 'red';
    }

    return (
      <div className="absolute w-6 h-6 left-1 bottom-1 z-10">
        <RateCircle rate={score} color={color} />
      </div>
    );
  };

  return (
    <div className="relative h-img w-img m-4 flex-col">
      <Link to={pathUrl}>
        <img
          className="rounded-lg object-cover w-img h-full mx-auto"
          src={posterUrl}
          alt=""
        />
      </Link>
      {rate(content.vote_average)}
    </div>
  );
}
