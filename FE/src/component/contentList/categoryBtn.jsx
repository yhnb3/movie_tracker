import React from 'react';

export default function categoryBtn({
  categories,
  categoryChange,
  section,
  currentCategory,
}) {
  return (
    <div className="flex">
      {categories.map((category) => {
        if (currentCategory === category) {
          return (
            <button
              key={category}
              className="border-2 border-blue-300 p-1 mx-1"
              onClick={() => categoryChange({ section, category })}
              type="button"
            >
              {category}
            </button>
          );
        }
        return (
          <button
            className="p-1 mx-1"
            key={category}
            onClick={() => categoryChange({ section, category })}
            type="button"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}