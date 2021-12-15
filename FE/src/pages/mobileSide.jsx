import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MobileSide() {
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
          <li className="my-1">인기</li>
        </Link>
        <Link to="/movie/top_rated">
          <li className="my-1">평점 높은</li>
        </Link>
        <Link to="/movie/now_playing">
          <li className="my-1">현재 상영중</li>
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
        className={`text-xl p-1 mb-5 ${subMenuVisible.tv ? 'block' : 'hidden'}`}
      >
        <Link to="/tv/popular">
          <li className="my-1">인기</li>
        </Link>
        <Link to="/tv/top_rated">
          <li className="my-1">평점 높은</li>
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
          <li className="my-1">인기 인물</li>
        </Link>
      </ul>
    </div>
  );
}
