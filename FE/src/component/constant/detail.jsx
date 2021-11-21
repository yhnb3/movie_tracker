/* eslint-disable camelcase */
import React from 'react';

import Youtube from './youtube';

import RateCircle from './rateCircle';

export default function detail({ content }) {
  const backDropUrl = `https://image.tmdb.org/t/p/original/${content.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w300/${content.poster_path}`;
  const title = content.title || content.name;
  const date = content.title ? content.release_date : content.first_air_date;

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
        <RateCircle rate={score} color={color} />
      </div>
    );
  };

  console.log(content);
  const renderGenre = () => {
    const { genres } = content || [];
    return genres.map((genre) => (
      <span className="mx-2" key={genre.id}>
        {genre.name}
      </span>
    ));
  };

  const renderDate = () => (
    <span>
      {date.substring(0, 4)}/{date.substring(5, 7)}/{date.substring(8, 10)}
    </span>
  );

  return (
    <div>
      <div className="relative h-poster">
        <img
          className="h-poster w-full object-cover object-top opacity-50"
          src={backDropUrl}
          alt=""
        />
        <div className="absolute w-full h-3/4 bottom-1/8 px-20">
          <div className="flex flex-row">
            <div className="w-1/3">
              <img className="h-full mx-auto" src={posterUrl} alt="" />
            </div>
            <div className="w-2/3 p-5 bg-black bg-opacity-70 text-white">
              <p>
                {title}({date.substring(0, 4)})
              </p>
              <div className="p-1">
                {renderDate()}
                <span>({content.production_countries[0].iso_3166_1})</span>
                {renderGenre()}
              </div>
              {rate(content.vote_average)}
              <p>{content.tagline}</p>
              <p>개요</p>
              <p className="max-h-12 overflow-ellipsis overflow-hidden line-clamp-2">
                {content.overview || '해당 언어의 줄거리가 존재하지 않습니다.'}
              </p>
            </div>
          </div>
        </div>
      </div>
      {content.title ? (
        <div className="">
          <Youtube video={content.video.results[0]} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
