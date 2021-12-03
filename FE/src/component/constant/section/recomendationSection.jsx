import React from 'react';
import { Link } from 'react-router-dom';

export default function recomendationSection({ contents }) {
  return (
    <div>
      <p className="text-xl font-bold my-5">추천</p>
      <div className="overflow-y-hidden overflow-x-auto whitespace-nowrap">
        {contents.map((content, idx) => {
          const padding = idx !== contents.length - 1 ? 4 : 0;
          const section = content.title ? 'movie' : 'tv';
          return (
            <div
              className={`inline-flex pr-${padding} rounded-md`}
              key={content.id}
            >
              <Link to={`/${section}/${content.id}`}>
                <img
                  className="w-sm_backdrop h-sm_backdrop object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${content.backdrop_path}`}
                  alt={content.name || content.title}
                />
              </Link>
              <div className="flex justify-between">
                <p className="text-sm">{content.name || content.title}</p>
                <p>{`${Math.round(content.vote_average * 10)}%`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
