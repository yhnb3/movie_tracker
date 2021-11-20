import React from 'react';
import { Link } from 'react-router-dom';

export default function dropMenu({ category, menus, isVisible }) {
  return (
    <div
      className={`absolute bg-white top-16 z-10 border border-gray-200 px-3 py-1 rounded-lg ${
        isVisible ? 'visible' : 'invisible'
      }`}
    >
      {menus.map((element) => (
        <div className="my-2 mx-2">
          <Link to={`/${category}/${element.url}`} key={element.name}>
            {element.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
