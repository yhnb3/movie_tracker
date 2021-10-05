/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function NowPlaying({ movie }) {
  const posterUrl = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
  const pathUrl = `/movie/${movie.id}`;
  return (
    <div className="p-1 w-60 h-100 flex-col">
      <Link to={pathUrl}>
        <img className="" src={posterUrl} alt="" />
      </Link>
      <p className="text-xs">{movie.title}</p>
    </div>
  );
}
