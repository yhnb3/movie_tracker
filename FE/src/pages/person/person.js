import React from 'react';
import { Link } from 'react-router-dom';

import getKnownFor from './getKnownFor';

export default function Person({
  person: { name, profile_path, known_for, id },
}) {
  return (
    <div className="border border-gray-300 shadow-sm w-person">
      <Link to={`/person/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w235_and_h235_face${profile_path}`}
          alt={name}
        />
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
