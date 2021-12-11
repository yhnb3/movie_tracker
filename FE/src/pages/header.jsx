/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { DropMenu } from '../component/index';

export default function header() {
  const [movieIsVisible, setMovieIsVisible] = useState(false);
  const [tvIsVisible, setTvIsVisible] = useState(false);
  const [personIsVisible, setPersonIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const showMenu = (target) => {
    console.log(target);
    if (target === 'movie') {
      setMovieIsVisible(true);
    } else if (target === 'tv') {
      setTvIsVisible(true);
    } else {
      setPersonIsVisible(true);
    }
  };

  const hideMenu = (target) => {
    if (target === 'movie') {
      setMovieIsVisible(false);
    } else if (target === 'tv') {
      setTvIsVisible(false);
    } else {
      setPersonIsVisible(false);
    }
  };

  const handlingHeader = () => {
    if (window.scrollY >= 100 && window.scrollY > scrollY && headerVisible) {
      setHeaderVisible(!headerVisible);
    } else if (window.scrollY < scrollY && !headerVisible) {
      setHeaderVisible(!headerVisible);
    }
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handlingHeader);
    return () => window.removeEventListener('scroll', handlingHeader);
  });

  return (
    <header
      className={`h-20 w-full bg-blue-900 fixed z-50 ${
        window.scrollY >= 100
          ? headerVisible
            ? 'animate-show-header top-0'
            : 'animate-hide-header -top-20'
          : 'top-0'
      }`}
    >
      <div className="flex h-full px-72 items-center">
        <Link to="/">
          <button className="mr-12 font-bold text-white text-xl" type="button">
            HOME
          </button>
        </Link>
        <div
          className="flex h-full items-center"
          data-name="movie"
          onMouseOver={(e) => showMenu(e.target.dataset.name)}
          onFocus={(e) => showMenu(e.target.dataset.name)}
          onMouseOut={(e) => hideMenu(e.target.dataset.name)}
          onBlur={(e) => hideMenu(e.target.dataset.name)}
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
          <button className="mr-12 font-bold text-white text-xl" type="button">
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
        <div
          className="flex h-full items-center"
          data-name="person"
          onMouseOver={(e) => showMenu(e.target.dataset.name)}
          onFocus={(e) => showMenu(e.target.dataset.name)}
          onMouseOut={(e) => hideMenu(e.target.dataset.name)}
          onBlur={(e) => hideMenu(e.target.dataset.name)}
        >
          <button className="mr-12 font-bold text-white text-xl" type="button">
            인물
          </button>
          <DropMenu
            category="person"
            menus={[{ url: 'popular', name: '인기있는' }]}
            isVisible={personIsVisible}
          />
        </div>
      </div>
    </header>
  );
}
