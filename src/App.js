import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typing from './component/Typing.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Faces of Berkeley</h2>
        </div>
        <p className="App-intro">
          Hello Berkeley Students!
        </p>
        <div id="app"></div>
      </div>
    );
  }
}

export default App;
