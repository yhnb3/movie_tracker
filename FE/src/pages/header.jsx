import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { DropMenu } from '../component/index';

export default function header() {
  const [movieIsVisible, setMovieIsVisible] = useState(false);
  const [tvIsVisible, setTvIsVisible] = useState(false);

  const showMenu = (target) => {
    if (target === 'movie') {
      setMovieIsVisible(true);
    } else {
      setTvIsVisible(true);
    }
  };

  const hideMenu = (target) => {
    if (target === 'movie') {
      setMovieIsVisible(false);
    } else {
      setTvIsVisible(false);
    }
  };
  return (
    <header className="h-20 w-full bg-blue-900">
      <div className="flex h-full px-48 items-center">
        <Link to="/">
          <button className="mr-12 font-bold text-white text-xl" type="button">
            HOME
          </button>
        </Link>
        <div
          className="flex h-full items-center"
          data-name="movie"
          onMouseOver={() => showMenu('movie')}
          onFocus={() => showMenu('movie')}
          onMouseOut={() => hideMenu('movie')}
          onBlur={() => hideMenu('movie')}
        >
          <button className="mr-12 font-bold text-white text-xl" type="button">
            영화
          </button>
          <DropMenu
            category="movie"
            menus={[
              { url: 'popular', name: '인기' },
              { url: 'top_rated', name: '평점 높은' },
              { url: 'now_playing', name: '지금 상영중' },
            ]}
            isVisible={movieIsVisible}
          />
        </div>
        <div
          className="flex h-full items-center"
          data-name="tv"
          onMouseOver={() => showMenu('tv')}
          onFocus={() => showMenu('tv')}
          onMouseOut={() => hideMenu('tv')}
          onBlur={() => hideMenu('tv')}
        >
          <button className="font-bold text-white text-xl" type="button">
            TV 프로그램
          </button>
          <DropMenu
            category="tv"
            menus={[
              { url: 'popular', name: '인기' },
              { url: 'top_rated', name: '평점 높은' },
            ]}
            isVisible={tvIsVisible}
          />
        </div>
      </div>
    </header>
  );
}
