import React, { Component } from 'react'
import '../thumbnails.css';

class CalendarThumb extends Component {

  render() {
    return(
      <div>
        <img className="thumbs" width="75%" align="middle" src={require('./Cal.png')} alt="Calendar" />
      </div>
    )
  }
}
export default CalendarThumb