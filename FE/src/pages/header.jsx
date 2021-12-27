/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';

import { DropMenu } from '../component/index';

export default function header({ handleSide }) {
  const [movieIsVisible, setMovieIsVisible] = useState(false);
  const [tvIsVisible, setTvIsVisible] = useState(false);
  const [personIsVisible, setPersonIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const showMenu = (target) => {
    if (target === 'movie') {
      setMovieIsVisible(true);
    } else if (target === 'tv') {
      setTvIsVisible(true);
    } else if (target === 'person') {
      setPersonIsVisible(true);
    }
  };

  const hideMenu = (target) => {
    if (target === 'movie') {
      setMovieIsVisible(false);
    } else if (target === 'tv') {
      setTvIsVisible(false);
    } else if (target === 'person') {
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
      <div className="flex h-full w-screen mx-auto items-center mobile:px-0 mobile:w-full mobile:justify-between relative">
        <button type="button" onClick={() => handleSide()}>
          <GiHamburgerMenu className="w-20 h-8 text-white hidden mobile:block" />
        </button>
        <Link to="/">
          <button
            className="mr-12 font-bold text-white text-xl mobile:mx-6"
            type="button"
          >
            HOME
          </button>
        </Link>
        <div className="hidden mobile:block w-20" />
        <div
          className="flex h-full items-center mobile:hidden"
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
          className="flex h-full items-center mobile:hidden"
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
          className="flex h-full items-center mobile:hidden"
          data-name="person"
          onMouseOver={() => showMenu('person')}
          onFocus={() => showMenu('person')}
          onMouseOut={() => hideMenu('person')}
          onBlur={() => hideMenu('person')}
        >
          <button className="mr-12 font-bold text-white text-xl" type="button">
            인물
          </button>
          <DropMenu
            category="person"
            menus={[{ url: 'popular', name: '인기 인물' }]}
            isVisible={personIsVisible}
          />
        </div>
      </div>
    </header>
  );
}
