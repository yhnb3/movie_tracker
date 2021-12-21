import React from 'react';
import { Link } from 'react-router-dom';

export default function recomendationSection({ contents }) {
  return (
    <div>
      <p className="text-xl font-bold m-2">추천</p>
      <div className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full overflow-y-hidden overflow-x-auto whitespace-nowrap px-4">
        {contents.map((content, idx) => {
          const padding = idx !== contents.length - 1 ? 4 : 0;
          const section = content.title ? 'movie' : 'tv';
          return (
            <div
              className={`inline-flex pr-${padding} rounded-md flex flex-col`}
              key={content.id}
            >
              <Link to={`/${section}/${content.id}`}>
                <img
                  className="w-sm_backdrop h-sm_backdrop object-cover rounded-md"
                  src={
                    content.backdrop_path
                      ? `https://image.tmdb.org/t/p/original/${content.backdrop_path}`
                      : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'
                  }
                  alt={content.name || content.title}
                />
              </Link>
              <div className="flex justify-between mb-2 w-sm_backdrop">
                <p className="line-clamp-1 max-h-6 text-sm  w-10/12">
                  {content.name || content.title}
                </p>
                <p>{`${Math.round(content.vote_average * 10)}%`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
