import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import LeftScroll from './LeftScroll.jsx'
import Main from './Main.jsx'

class App extends Component {
  render() {
    return (
      <div className="platform-wrapper">
        <LeftScroll className="left-scroll"/>
        <Main className="main-app"/>
      </div>
    );
  }
}

export default App;
