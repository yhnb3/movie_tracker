/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function NowPlaying({ movie }) {
  const posterUrl = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
  const pathUrl = `/movie/${movie.id}`;
  return (
    <div className="flex-1">
      <Link to={pathUrl}>
        <img className="rounded-2xl object-contain" src={posterUrl} alt="" />
      </Link>
      <p className="text-xs">{movie.title}</p>
    </div>
  );
}
