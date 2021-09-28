import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    this.testServer();
  }

  testServer = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=36280866a80b71c69c0131b57e760ee2&language=en-US&page=1',
    ).then((res) => res.json());
    console.log(response);
  };

  render() {
    return (
      <div className="m-5 bg-yellow-500 text-blue-500 font-bold">
        안녕하세요
      </div>
    );
  }
}
export default App;
