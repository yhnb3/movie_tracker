/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function NowPlaying({ content }) {
  const posterUrl = `https://image.tmdb.org/t/p/w200/${content.poster_path}`;
  const pathUrl = content.title ? `/movie/${content.id}` : `/tv/${content.id}`;

  const rate = (score) => {
    if (score >= 8) return <div className="bg-green-200">{score}</div>;
    if (score >= 5) return <div className="bg-blue-200">{score}</div>;
    return <div className="bg-red-100">{score}</div>;
  };

  if (content.title)
    return (
      <div className="p-1 w-60 h-100 flex-col">
        <Link to={pathUrl}>
          <img className="" src={posterUrl} alt="" />
        </Link>
        <p className="text-xs">{content.title}</p>
        {rate(content.vote_average)}
      </div>
    );
  return (
    <div className="p-1 w-60 h-100 flex-col">
      <Link to={pathUrl}>
        <img className="" src={posterUrl} alt="" />
      </Link>
      <p className="text-xs">{content.name}</p>
      {rate(content.vote_average)}
    </div>
  );
}
