/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function NowPlaying({ movie }) {
  const posterUrl = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
  const pathUrl = `/movie/${movie.id}`;
  return (
    <div className="mx-auto p-6">
      <Link to={pathUrl}>
        <img className="rounded-2xl" src={posterUrl} alt="" />
      </Link>
      <p>{movie.title}</p>
    </div>
  );
}
