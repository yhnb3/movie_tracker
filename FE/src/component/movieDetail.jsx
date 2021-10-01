import React from 'react';

export default function movieDetail({ movie }) {
  const backDropUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  // const posterUrl = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
  // const pathUrl = `/movie/${movie.id}`;
  return (
    <div className="mx-auto p-6">
      <img className="rounded-2xl" src={backDropUrl} alt="" />
      <p>{movie.title}</p>
    </div>
  );
}
