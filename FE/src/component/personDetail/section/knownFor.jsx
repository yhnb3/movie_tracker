import React from 'react';

export default function knowFor({ person }) {
  const movies =
    person.known_for_department === 'Acting'
      ? person.credit.cast
      : person.credit.crew;
  const usableMovies = movies.map((content) => content);
  const sortedMovies = usableMovies
    .sort((a, b) => b.vote_count - a.vote_count)
    .slice(0, 8);

  const render = () =>
    sortedMovies.map((content) => (
      <div
        className="relative rounded-md mr-6 shadow-xl my-2 border border-gray-200"
        key={content.title || content.name}
      >
        <img
          className="h-48 object-cover rounded-md min-w-posterImg"
          src={`https://image.tmdb.org/t/p/w300/${content.poster_path}`}
          alt={content.title || content.name}
        />
      </div>
    ));

  return (
    <div className="flex flex-col flex-nowrap overflow-y-hidden overflow-x-auto">
      <p className="text-xl font-bold py-2">유명 분야</p>
      <div className="flex">{render()}</div>
    </div>
  );
}
