import React from 'react';

import RateCircle from './rateCircle';

export default function mobileDetail({ content }) {
  const backDropUrl = `https://image.tmdb.org/t/p/original/${content.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w300/${content.poster_path}`;
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
        <RateCircle rate={score} color={color} times={1} />
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
      <div className="h-40 relative">
        <img
          className="h-40 w-full object-top"
          src={backDropUrl}
          alt={content.title || content.name}
        />
        <div className="absolute h-40 inset-y-0 left-0 px-4 py-4 bg-gradient-to-r from-blackOp100 via-blackOp100 to-blackOp0">
          <img
            className="h-32 object-cover rounded-md"
            src={posterUrl}
            alt={content.title || content.name}
          />
        </div>
        <div className="bg-black text-white">
          <div className="text-center font-bold text-xl">
            {content.name || content.title}
          </div>
          <div className="flex flex-row">
            <div>{rate(content.vote_average)}</div>
            <div className="text-white">회원점수</div>
          </div>
          <div>
            <div>{renderDate()}</div>
            <div>{renderGenre()}</div>
          </div>
          <div>
            <div>{content.tagline}</div>
            <div>
              <p>개요</p>
              <p>
                {content.overview || '해당 언어의 개요가 존재하지 않습니다.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
