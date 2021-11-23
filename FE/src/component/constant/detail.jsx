/* eslint-disable camelcase */
import React from 'react';

import Youtube from './youtube';

import RateCircle from './rateCircle';

export default function detail({ content }) {
  const backDropUrl = `https://image.tmdb.org/t/p/original/${content.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w300/${content.poster_path}`;
  const title = content.title || content.name;
  const date = content.title ? content.release_date : content.first_air_date;

  const providers = (() => {
    if (!content.provider) return [];
    const result = [];
    if (content.provider.buy) result.push(...content.provider.buy);
    if (content.provider.rent) result.push(...content.provider.rent);
    if (content.provider.flatrate) result.push(...content.provider.flatrate);
    return result;
  })();

  const rate = (score) => {
    let color = 'green';

    if (score < 7) {
      color = 'yellow';
    }

    if (score < 4) {
      color = 'red';
    }

    return (
      <div className="h-10">
        <RateCircle rate={score} color={color} times={1.5} />
      </div>
    );
  };

  const renderGenre = () => {
    const { genres } = content || [];
    const genreString = genres.map((genre) => genre.name).join(', ');
    return <span className="mx-1">{genreString}</span>;
  };

  const renderDate = () => (
    <span>
      {date.substring(0, 4)}/{date.substring(5, 7)}/{date.substring(8, 10)}
    </span>
  );
  return (
    <div>
      <div className="relative h-poster">
        {content.backdrop_path ? (
          <img
            className="h-poster w-full object-cover object-top z-20 opacity-50"
            src={backDropUrl}
            alt=""
          />
        ) : (
          <></>
        )}
        <div className="absolute w-full h-full bg-black bg-opacity-70 top-0 z-10" />
        <div className="absolute w-full h-3/4 bottom-1/8 px-72 z-20">
          <div className="flex flex-row">
            <div className="h-full">
              {content.poster_path ? (
                <img className="h-full rounded-lg" src={posterUrl} alt="" />
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col w-2/3 px-5 text-white">
              <div className="my-2">
                <div>
                  <span className="text-3xl font-bold">{title}</span>{' '}
                  <span className="text-3xl text-gray-400">
                    ({date.substring(0, 4)})
                  </span>
                </div>
                <div className="p-1">
                  {renderDate()}
                  <span>({content.production_countries[0].iso_3166_1})</span>
                  {renderGenre()}
                </div>
              </div>
              <div className="h-16 my-2">{rate(content.vote_average)}</div>
              <p className="text-lg italic text-gray-400 my-2">
                {content.tagline}
              </p>
              <p className="text-2xl font-bold my-2">개요</p>
              <p className="max-h-20 overflow-ellipsis overflow-hidden text-sm line-clamp-4 my-2">
                {content.overview || '해당 언어의 줄거리가 존재하지 않습니다.'}
              </p>
              <div className="py-3 grid grid-cols-9 gap-0 my-2">
                {providers.map((element) => (
                  <img
                    className="h-16 rounded-md"
                    key={element.id}
                    src={`https://www.themoviedb.org/t/p/original/${element.logo_path}`}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {content.title && content.video.results.length > 0 ? (
        <div className="">
          <Youtube video={content.video.results[0]} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
