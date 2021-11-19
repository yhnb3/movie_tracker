import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MovieDetailContainer, TvDetailContainer } from './component/index';
import TVDetailContainer from './component/tvDetail/tvDetailConatiner';

import {
  Home,
  Header,
  MovieContainer,
  StreamingContainer,
} from './pages/index';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
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
          <Route path="/streaming/:section" element={<StreamingContainer />} />
        </Routes>
      </div>
    );
  }
}
export default App;
