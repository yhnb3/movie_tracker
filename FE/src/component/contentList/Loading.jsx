import React from 'react';
import RateCircle from '../constant/rateCircle';

const rate = (score) => {
  let color = 'green';

  if (score < 7) {
    color = 'yellow';
  }

  if (score < 4) {
    color = 'red';
  }

  return (
    <div className="absolute w-6 h-6 left-1 bottom-1 z-10">
      <RateCircle rate={score} color={color} times={1} />
    </div>
  );
};

const NoPoster = () => (
  <div className="h-list">
    <div className="relative h-img w-img top-0 flex-col whitespace-normal shadow-md rounded-lg">
      <img
        className="rounded-lg object-cover w-img h-full mx-auto"
        src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
        alt="noImage"
      />
      {rate(0)}
    </div>
  </div>
);

export default function Loading() {
  return (
    <div>
      {[...Array(6)].map((index) => (
        <div className="inline-flex px-5" key={index}>
          <NoPoster />
        </div>
      ))}
    </div>
  );
}
