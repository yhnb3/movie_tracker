/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';

import getKnownFor from './getKnownFor';

export default function Person({ person }) {
  const { id, profile_path, name, known_for } = person;
  const profile = profile_path
    ? `https://image.tmdb.org/t/p/w235_and_h235_face${profile_path}`
    : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg';
  return (
    <div className="border border-gray-300 shadow-sm w-person my-5 mobile:w-40">
      <Link to={`/person/${id}`}>
        <img className="object-cover" src={profile} alt={name} />
      </Link>
      <div className="m-2">
        <Link to={`/person/${id}`}>
          <p className="font-bold">{name}</p>
        </Link>
        <p className="font-extralight line-clamp-1">{getKnownFor(known_for)}</p>
      </div>
    </div>
  );
}
