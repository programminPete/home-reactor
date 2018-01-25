import React, { Component } from 'react';
import { render } from 'react-dom';
import Clock from 'react-live-clock';
import './style.css';


class StarterApp extends Component {
    state = {
      date: new Date()
    }

    componentDidMount() {
      setInterval(() => this.setState({date: new Date() }),1000);
    }
    render() {
      return(
        <div>
          <div id="clock">
            <Clock format={'hh:mm:ss'} ticking={true} timezone={'US/Pacific'} />
          </div>
          <img id="logo" width="60%" align="middle" src={require('./home.PNG')} alt="Logo"/>
        </div>
      )
    }
}
export default StarterApp
