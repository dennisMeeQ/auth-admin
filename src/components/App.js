import React, { Component } from 'react';

import Header from './common/Header';
import Main from './common/Main'


class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
