import React from 'react';

export default function categoryLoading() {
  const items = Array(20)
    .fill(1)
    .map((element, idx) => idx + element);
  console.log(items);
  return (
    <div className="grid grid-cols-5 place-items-center">
      {items.map((element) => (
        <div
          className="w-person h-person bg-gray-300 my-5 animate-blink"
          key={element}
        />
      ))}
    </div>
  );
}
