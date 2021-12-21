/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';

import Youtube from './youtube';

import RateCircle from './rateCircle';

import SeasonSection from './seasonSection';
import { RecomendationSection, handlingProvider } from './section';

export default function detail({ content }) {
  const backDropUrl = `https://image.tmdb.org/t/p/original/${content.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w300/${content.poster_path}`;
  const title = content.title || content.name;
  const date = content.title ? content.release_date : content.first_air_date;
  const providers = handlingProvider(content);

  console.log(content);

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

  const seasonsSection = () => (
    <div className="mx-2">
      <p className="text-xl font-bold">지난 시즌</p>
      <div>
        {content.seasons.map((element) => (
          <SeasonSection content={element} key={element.id} />
        ))}
      </div>
    </div>
  );

  const mediaSection = () => (
    <div>
      <p className="font-bold text-xl m-2">미디어</p>
      {content.video.results.length > 0 ? (
        <div className="flex flex-row m-2">
          {content.video.results[0] ? (
            <Youtube video={content.video.results[0]} key={0} />
          ) : (
            <></>
          )}
          {content.video.results[1] ? (
            <Youtube video={content.video.results[1]} kye={1} />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div>
          <p>관련 동영상이 존재하지 않습니다.</p>
        </div>
      )}
    </div>
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
              <div className="flex flex-row my-2">
                {providers.map((element) => (
                  <img
                    className="h-14 rounded-md mx-2"
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
      <div className="px-72">
        <div className="my-5">
          <p className="font-bold text-xl m-2">주요 출연진</p>
          <div className="flex flex-row">
            {content.cast.map((element) => {
              if (element.order < 7) {
                return (
                  <div
                    className="relative border border-gray-200 rounded-lg w-36 mx-2 shadow-md"
                    key={element.id}
                  >
                    <Link to={`/person/${element.id}`}>
                      <img
                        className="h-42 w-full object-cover object-top rounded-lg"
                        src={`https://image.tmdb.org/t/p/original/${element.profile_path}`}
                        alt={element.name}
                      />
                    </Link>
                    <div className="p-1">
                      <p className="font-bold">{element.name}</p>
                      <p className="text-sm text-gray-400 whitespace-normal">
                        {element.character}
                      </p>
                    </div>
                  </div>
                );
              }
              return <></>;
            })}
          </div>
        </div>
        {content.title ? mediaSection() : seasonsSection()}
        <RecomendationSection contents={content.recommend} />
      </div>
    </div>
  );
}
