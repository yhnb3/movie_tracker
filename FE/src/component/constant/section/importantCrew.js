import React from 'react';
import useFetchData from '../../custom/useFetchData.tsx';

export default function importantCrew({ id, section }) {
  const endPoint = `https://api.themoviedb.org/3/${section}/${id}/credits?api_key=${process.env.REACT_APP_API_CODE}&language=ko`;
  const { loading, error, data } = useFetchData({ endPoint });
  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러가 발생하였습니다.</p>;

  const canBe = data.crew.filter(
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
