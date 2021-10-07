import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { TvDetailContainer, MovieDetailContainer } from './component/index';

import { Home } from './pages/index';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie/:id">
          <MovieDetailContainer />
        </Route>
        <Route path="/tv/:id">
          <TvDetailContainer />
        </Route>
      </div>
    );
  }
}
export default App;
