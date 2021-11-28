import React from 'react';

export default function personDetail({ person }) {
  console.log(person);
  return <p>{person.name}</p>;
}
