/* eslint-disable react/prop-types */
import React from 'react';

export default function NowPlaying({ movie }) {
  console.log(movie);
  return (
    <div className="m-5 bg-yellow-500 text-blue-500 font-bold">
      {movie.title}
    </div>
  );
}
