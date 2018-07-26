import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import LeftScroll from './LeftScroll.jsx'
import Main from './Main.jsx'

class Login extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="login-wrapper">
        <Login className="login"/>
      </div>
    );
  }
}

export default Login;
