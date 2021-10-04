import React from 'react';

export default function movieDetail({ movie }) {
  const backDropUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;

  console.log(movie);
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
    <div className="mx-auto p-6">
      <img className="rounded-2xl" src={backDropUrl} alt="" />
      <div className="p-1">{renderGenre()}</div>
      <p>{movie.title}</p>
    </div>
  );
}
