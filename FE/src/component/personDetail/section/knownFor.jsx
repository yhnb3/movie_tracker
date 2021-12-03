import React from 'react';
import { Link } from 'react-router-dom';

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
      <div className="inline-flex" key={content.title || content.name}>
        <Link to={`/${content.title ? 'movie' : 'tv'}/${content.id}`}>
          <div className="relative rounded-md mr-6 shadow-xl my-2 border border-gray-200">
            <img
              className="h-48 object-cover rounded-md min-w-posterImg"
              src={`https://image.tmdb.org/t/p/w300/${content.poster_path}`}
              alt={content.title || content.name}
            />
          </div>
        </Link>
      </div>
    ));

  return (
    <div className="flex flex-col">
      <p className="text-xl font-bold py-2">유명 분야</p>
      <div className="overflow-y-hidden overflow-x-auto whitespace-nowrap">
        {render()}
      </div>
    </div>
  );
}
