import React from 'react';
import './todoItem.css';

export default class todoItem extends React.Component {

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return(
      <div className="todoWrapper">
        <button className="removeTodo" onClick={(e) => this.removeTodo(this.props.id)}>Remove</button>{this.props.todo.text}
      </div>
    )
  }
}
