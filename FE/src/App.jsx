import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NowPlayingContainer from './component/nowPlayingContainer';
import MovieDetailConatainer from './component/movieDetailContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/">
          <NowPlayingContainer />
        </Route>
        <Route path="/movie/:id">
          <MovieDetailConatainer />
        </Route>
      </div>
    );
  }
}
export default App;
