import React from 'react';
import CategoryLoading from '../categoryLoading';

import Person from './person';

export default function personList({ persons, isLoading }) {
  if (isLoading) {
    return <CategoryLoading />;
  }
  return (
    <div className="grid grid-cols-5 place-items-center mobile:grid-cols-2">
      {persons.map((element) => (
        <Person person={element} key={element.name} />
      ))}
    </div>
  );
}
