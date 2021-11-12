import React from 'react';

import { Link } from 'react-router-dom';

export default function header() {
  return (
    <header className="h-20 w-full bg-blue-900">
      <div className="flex h-full px-48 items-center">
        <Link to="/">
          <button className="mr-12 font-bold text-white text-xl" type="button">
            HOME
          </button>
        </Link>
        <Link to="/movie">
          <button className="mr-12 font-bold text-white text-xl" type="button">
            영화
          </button>
        </Link>
        <Link to="/streaming">
          <button className="font-bold text-white text-xl" type="button">
            스트리밍 드라마
          </button>
        </Link>
      </div>
    </header>
  );
}
