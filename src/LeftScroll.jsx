import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route, Link } from 'react-router-dom';
import './thumbnails.css';

import CalendarThumb from './thumbnails/CalendarThumb'
import TodoThumb from './thumbnails/TodoThumb'
import WeatherThumb from './thumbnails/WeatherThumb'
import LedstripThumb from './devthumbnails/LedstripThumb'

class LeftScroll extends Component {
  render() {
    return(
      <div>
        <a><Link to={'/'}>
          
        </Link></a>
        <a><Link to={'/calendar'}>
          <CalendarThumb />
        </Link></a>
        <a><Link to={'/todo'}>
          <TodoThumb />
        </Link></a>
        <a><Link to={'/weather'}>
          <WeatherThumb />
        </Link></a>
        <a><Link to={'/ledstrip'}>
          <LedstripThumb />
        </Link></a>
      </div>
    )
  }
}
export default LeftScroll;
