/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function NowPlaying({ content }) {
  const posterUrl = `https://image.tmdb.org/t/p/w200/${content.poster_path}`;
  const pathUrl = content.title ? `/movie/${content.id}` : `/tv/${content.id}`;
  if (content.title)
    return (
      <div className="p-1 w-60 h-100 flex-col">
        <Link to={pathUrl}>
          <img className="" src={posterUrl} alt="" />
        </Link>
        <p className="text-xs">{content.title}</p>
      </div>
    );
  return (
    <div className="p-1 w-60 h-100 flex-col">
      <Link to={pathUrl}>
        <img className="" src={posterUrl} alt="" />
      </Link>
      <p className="text-xs">{content.name}</p>
    </div>
  );
}
