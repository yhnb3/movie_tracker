/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-nested-ternary */
import * as React from 'react';

import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';

import HeaderBtn from './header/HeaderBtn'

interface props {
  handleSide : () => void
}


const Header : React.FC<props> = ({ handleSide } : props) => {
  const [movieIsVisible, setMovieIsVisible] = React.useState<boolean>(false);
  const [tvIsVisible, setTvIsVisible] = React.useState<boolean>(false);
  const [personIsVisible, setPersonIsVisible] = React.useState<boolean>(false);
  const [headerVisible, setHeaderVisible] = React.useState<boolean>(true);
  const [scrollY, setScrollY] = React.useState<Number>(0);

  const showMenu = (target : string) => {
    if (target === 'movie') {
      setMovieIsVisible(true);
    } else if (target === 'tv') {
      setTvIsVisible(true);
    } else if (target === 'person') {
      setPersonIsVisible(true);
    }
  };

  const hideMenu = (target : string) => {
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

  React.useEffect(() => {
    window.addEventListener('scroll', handlingHeader);
    return () => window.removeEventListener('scroll', handlingHeader);
  });

  const movieMenus = [
    { url: 'popular', name: '인기' },
    { url: 'top_rated', name: '평점 높은' },
    { url: 'now_playing', name: '지금 상영중' },
  ]

  const tvMenus = [
    { url: 'popular', name: '인기' },
    { url: 'top_rated', name: '평점 높은' },
  ]

  const peopleMenus = [{ url: 'popular', name: '인기 인물' }]

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
        <HeaderBtn showMenu={showMenu} hideMenu={hideMenu} menus={movieMenus} isVisible={movieIsVisible} category='movie' name='영화' />
        <HeaderBtn showMenu={showMenu} hideMenu={hideMenu} menus={tvMenus} isVisible={tvIsVisible} category='tv' name='TV 프로그램' />
        <HeaderBtn showMenu={showMenu} hideMenu={hideMenu} menus={peopleMenus} isVisible={personIsVisible} category='person' name='인물' />
      </div>
    </header>
  );
}


export {Header as default}