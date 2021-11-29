import React from 'react';
import { KnownFor } from './section';

export default function personDetail({ person }) {
  console.log(person);
  return (
    <div className="px-72 pb-28 flex flex-row mt-10">
      <div className="flex flex-col min-w-personImg">
        <img
          className="w-80 object-cover"
          src={`https://image.tmdb.org/t/p/w300/${person.profile_path}`}
          alt={person.name}
        />
      </div>
      <div className="flex flex-col pl-10 w-8/12">
        <p className="text-3xl font-bold pb-2">{person.name}</p>
        <div>
          <KnownFor person={person} />
        </div>
      </div>
    </div>
  );
}
