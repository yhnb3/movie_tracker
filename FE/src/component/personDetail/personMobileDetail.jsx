import React from 'react';
import { KnownFor, PersonHistory, PersonInfo } from './section';

export default function personMobileDetail({ person }) {
  return (
    <div className="flex flex-col pt-20 px-4 pb-24">
      <div className="mt-4">
        <img
          className="w-40 object-cover rounded-md mx-auto"
          src={`https://image.tmdb.org/t/p/w235_and_h235_face/${person.profile_path}`}
          alt={person.name}
        />
      </div>
      <div className="text-center mt-4 text-3xl font-bold">{person.name}</div>
      <PersonInfo person={person} />
      <div className="mb-4">
        <p className="text-2xl font-bold">약력</p>
        <p>
          {person.biography
            ? person.biography
            : `${person.name}의 약력란이 비어있습니다.`}
        </p>
      </div>
      <KnownFor person={person} />
      <PersonHistory person={person} />
    </div>
  );
}
