import React from 'react';

export default function tvDetail({ tv }) {
  const backDropUrl = `https://image.tmdb.org/t/p/original/${tv.backdrop_path}`;

  const renderGenre = () => {
    const { genres } = tv || [];
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
      <p>{tv.name}</p>
    </div>
  );
}
