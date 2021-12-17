import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import {
  MovieDetailContainer,
  PersonDetailContainer,
  TvDetailContainer,
} from './component/index';
import TVDetailContainer from './component/tvDetail/tvDetailConatiner';

import {
  Home,
  Header,
  Footer,
  MovieContainer,
  StreamingContainer,
  SearchResult,
  PersonContainer,
} from './pages/index';
import MobileSide from './pages/mobileSide';

function App() {
  const [sideVisible, setSideVisible] = useState(undefined);
  const location = useLocation();
  const handleSide = () => {
    setSideVisible(!sideVisible);
  };

  useEffect(() => {
    if (sideVisible) {
      setSideVisible(false);
    }
  }, [location]);

  return (
    <div className="relative min-h-screen min-w-screen">
      <Header handleSide={handleSide} />
      <MobileSide sideVisible={sideVisible} handleSide={handleSide} />
      <Routes>
        <Route index path="/" element={<Home sideVisible={sideVisible} />} />
        <Route path="movie" element={<MovieDetailContainer />}>
          <Route path=":id" element={<MovieDetailContainer />} />
        </Route>
        <Route path="tv" element={<TVDetailContainer />}>
          <Route path=":id" element={<TvDetailContainer />} />
        </Route>
        <Route
          path="/movie/popular"
          element={<MovieContainer section="popular" />}
        />
        <Route
          path="/movie/top_rated"
          element={<MovieContainer section="top_rated" />}
        />
        <Route
          path="/movie/now_playing"
          element={<MovieContainer section="now_playing" />}
        />
        <Route
          path="/tv/popular"
          element={<StreamingContainer section="popular" />}
        />
        <Route
          path="/tv/top_rated"
          element={<StreamingContainer section="top_rated" />}
        />
        <Route
          path="/person/popular"
          element={<PersonContainer section="popular" />}
        />
        <Route path="person" element={<PersonDetailContainer />}>
          <Route path=":id" element={<PersonDetailContainer />} />
        </Route>
        <Route path="/search" element={<SearchResult />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
