import React from 'react';

import Youtube from './youtube';

export default function movieDetail({ movie }) {
  const backDropUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;

  const renderGenre = () => {
    const { genres } = movie || [];
    return genres.map((genre) => (
      <span className="mx-2 p-1 bg-blue-200" key={genre.id}>
        {genre.name}
      </span>
    ));
  };

  renderGenre();
  return (
    <div>
      <img src={backDropUrl} alt="" />
      <div className="p-1">{renderGenre()}</div>
      <p>{movie.title}</p>
      <Youtube video={movie.video.results[0]} />
    </div>
  );
}
