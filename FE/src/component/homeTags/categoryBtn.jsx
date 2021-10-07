import React from 'react';

export default function categoryBtn({ categories }) {
  const makeBtn = () =>
    categories.map((item) => (
      <button
        className="p-1 m-1 border-2 border-black-300 rounded-xl"
        key={item.category}
        type="button"
      >
        {item.category}
      </button>
    ));
  return <div className="flex">{makeBtn()}</div>;
}
