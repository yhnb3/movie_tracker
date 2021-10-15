import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { TvDetailContainer, MovieDetailContainer } from './component/index';

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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie/:id">
          <MovieDetailContainer />
        </Route>
        <Route path="/tv/:id">
          <TvDetailContainer />
        </Route>
        <Route path="/movie">
          <MovieContainer />
        </Route>
        <Route path="/streaming">
          <StreamingContainer />
        </Route>
      </div>
    );
  }
}
export default App;
