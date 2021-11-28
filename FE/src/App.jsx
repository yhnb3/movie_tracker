import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
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
} from './pages/index';

class App extends Component {
  render() {
    return (
      <div className="relative min-h-screen">
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
          <Route
            path="/tv/popular"
            element={<StreamingContainer section="popular" />}
          />
          <Route
            path="/tv/top_rated"
            element={<StreamingContainer section="top_rated" />}
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
}
export default App;
