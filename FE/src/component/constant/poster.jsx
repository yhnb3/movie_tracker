/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import RateCircle from './rateCircle';

export default function poster({ content }) {
  const title = content.title || content.name;
  const posterUrl = `https://image.tmdb.org/t/p/w300/${content.poster_path}`;
  const pathUrl = content.title ? `/movie/${content.id}` : `/tv/${content.id}`;
  const date = content.release_date || content.first_air_date;

  const handlingDate = date
    ? `${parseInt(date.substring(5, 7), 10)}월 ${parseInt(
        date.substring(8, 10),
        10,
      )}, ${date.substring(0, 4)}`
    : '미정';

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
        <RateCircle rate={score} color={color} times={1} />
      </div>
    );
  };

  return (
    <div className="relative h-img w-img top-0 flex-col whitespace-normal shadow-md rounded-lg">
      <Link to={pathUrl}>
        <img
          className="rounded-lg object-cover w-img h-full mx-auto"
          src={posterUrl}
          alt=""
        />
      </Link>
      {rate(content.vote_average)}
      <div className="mt-4">
        <p className="text-md font-bold">{title}</p>
        <p className="text-sm text-gray-400">{handlingDate}</p>
      </div>
    </div>
  );
}
