import React from 'react';

import Youtube from './youtube';

export default function movieDetail({ movie }) {
  const backDropUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

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
    <div>
      <div className="relative">
        <img className="opacity-50" src={backDropUrl} alt="" />
        <div className="absolute w-full h-3/4 bottom-1/8">
          <div className="flex flex-row">
            <div className="w-1/5" />
            <div className="flex flex-row w-3/5">
              <div className="w-1/3">
                <img src={posterUrl} alt="" />
              </div>
              <div className="w-2/3">
                <p>{movie.title}</p>
              </div>
            </div>
            <div className="w-1/5" />
          </div>
        </div>
      </div>
      {/* <div className="p-1">{renderGenre()}</div> */}
      <div className="">
        <Youtube video={movie.video.results[0]} />
      </div>
    </div>
  );
}
