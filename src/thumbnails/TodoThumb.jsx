import React, { Component } from 'react'
import '../thumbnails.css';

class TodoThumb extends Component {

  render() {
    return(
      <div>
        <img class="thumbs" width="75%" align="middle" src={require('./todo.png')} alt="Todo" />
      </div>
    )
  }
}
export default TodoThumb