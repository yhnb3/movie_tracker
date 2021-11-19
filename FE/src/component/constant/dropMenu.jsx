import React from 'react';
import { Link } from 'react-router-dom';

export default function dropMenu({ menus, isVisible }) {
  return (
    <div
      className={`absolute bg-white top-16 z-10 border-black border-2 ${
        isVisible ? 'visible' : 'invisible'
      }`}
    >
      {menus.map((element) => (
        <Link to={`/movie/${element.url}`} key={element.name}>
          <p>{element.name}</p>
        </Link>
      ))}
    </div>
  );
}
