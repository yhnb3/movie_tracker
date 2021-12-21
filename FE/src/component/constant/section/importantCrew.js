import React from 'react';

export default function importantCrew({ crew }) {
  const canBe = crew.filter(
    (person) =>
      person.department === 'Writing' || person.department === 'Production',
  );

  const personMap = new Map();

  canBe.forEach((person) => {
    if (!personMap.has(person.name)) {
      personMap.set(person.name, person.job);
    }
  });
  const persons = [...personMap.entries()].slice(0, 6);
  return (
    <div className="grid grid-cols-2 my-2 p-2">
      {persons.map(([name, job]) => (
        <div className="py-1">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs">{job}</p>
        </div>
      ))}
    </div>
  );
}
