/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

export default function MobileSide({ sideVisible, handleSide }) {
  const [subMenuVisible, setSubMenuVisible] = useState({
    movie: false,
    tv: false,
    person: false,
  });

  const handleSubMenu = (category) => {
    setSubMenuVisible({
      ...subMenuVisible,
      [category]: !subMenuVisible[category],
    });
  };
  return (
    <div
      className={`fixed visible top-20 w-80 min-h-screen z-50 bg-blue-800 opacity-95 ${
        sideVisible === undefined
          ? '-left-80'
          : sideVisible
          ? 'animate-show-side left-0'
          : 'animate-hide-side -left-80'
      }`}
    >
      <div className="flex flex-col text-white text-2xl  p-5 ">
        <button
          className="text-left font-bold"
          type="button"
          onClick={() => handleSubMenu('movie')}
        >
          영화
        </button>
        <ul
          className={`text-xl p-1 mb-5 ${
            subMenuVisible.movie ? 'block' : 'hidden'
          }`}
        >
          <Link to="/movie/popular">
            <li className="my-1" onClick={() => handleSide()}>
              인기
            </li>
          </Link>
          <Link to="/movie/top_rated">
            <li className="my-1" onClick={() => handleSide()}>
              평점 높은
            </li>
          </Link>
          <Link to="/movie/now_playing">
            <li className="my-1" onClick={() => handleSide()}>
              현재 상영중
            </li>
          </Link>
        </ul>
        <button
          className="text-left font-bold"
          type="button"
          onClick={() => handleSubMenu('tv')}
        >
          TV 프로그램
        </button>
        <ul
          className={`text-xl p-1 mb-5 ${
            subMenuVisible.tv ? 'block' : 'hidden'
          }`}
        >
          <Link to="/tv/popular">
            <li className="my-1" onClick={() => handleSide()}>
              인기
            </li>
          </Link>
          <Link to="/tv/top_rated">
            <li className="my-1" onClick={() => handleSide()}>
              평점 높은
            </li>
          </Link>
        </ul>
        <button
          className="text-left font-bold"
          type="button"
          onClick={() => handleSubMenu('person')}
        >
          인물
        </button>
        <ul
          className={`text-xl p-1 mb-5 ${
            subMenuVisible.person ? 'block' : 'hidden'
          }`}
        >
          <Link to="/person/popular">
            <li className="my-1" onClick={() => handleSide()}>
              인기 인물
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

MobileSide.propTypes = {
  sideVisible: PropTypes.bool.isRequired,
  handleSide: PropTypes.func.isRequired,
};
