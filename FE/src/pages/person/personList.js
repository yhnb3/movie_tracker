import React from 'react';

import Person from './person';

export default function personList({ persons }) {
  return (
    <div className="grid grid-cols-5 place-items-center">
      {persons.map((element) => (
        <Person person={element} key={element.name} />
      ))}
    </div>
  );
}
