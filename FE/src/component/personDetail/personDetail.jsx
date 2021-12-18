import React from 'react';
import { KnownFor, PersonHistory, PersonInfo } from './section';

export default function personDetail({ person }) {
  console.log(person);
  return (
    <div className="px-72 pt-20 pb-28 flex flex-row mt-10 mobile:px-0">
      <div className="flex flex-col min-w-personImg ">
        <img
          className="w-80 object-cover rounded-md shadow-lg"
          src={`https://image.tmdb.org/t/p/w300/${person.profile_path}`}
          alt={person.name}
        />
        <PersonInfo person={person} />
      </div>
      <div className="flex flex-col pl-10 w-8/12">
        <p className="text-3xl font-bold pb-4">{person.name}</p>
        <div className="py-4">
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
    </div>
  );
}
