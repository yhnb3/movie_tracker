import React from 'react';

export default function categoryBtn({
  categories,
  categoryChange,
  currentCategory,
}) {
  return (
    <div className="flex mx-2 rounded-full border border-black">
      {categories.map((category) => {
        if (currentCategory === category) {
          return (
            <button
              key={category}
              className="rounded-full bg-gray-500 text-white px-5 py-1"
              onClick={() => categoryChange(category)}
              type="button"
            >
              {category}
            </button>
          );
        }
        return (
          <button
            className="px-5"
            key={category}
            onClick={() => categoryChange(category)}
            type="button"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
