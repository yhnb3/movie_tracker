import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.testServer();
  }

  testServer = async () => {
    const response = await fetch('http://localhost:8080/', {
      method: 'GET',
    }).then((res) => res.json());

    console.log(response);
  };

  render() {
    return <div>안녕하세요</div>;
  }
}
export default App;
