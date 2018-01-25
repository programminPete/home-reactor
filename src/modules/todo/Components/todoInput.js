import React from 'react';
import './todoInput.css';
import Keyboard from 'react-material-ui-keyboard';
import { extendedKeyboard } from 'react-material-ui-keyboard/layouts';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: "",
      open: false
    }
    this.onInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }
  handleInput(input) {
    this.setState({ value: input });
  }
  addTodo(todo) {
    if(todo.length){
      this.props.addTodo(todo);
      this.setState({value: ""});
    }
  }

  render() {
    const keyStyle = {
      color: "#25A6FF",
      backgroundColor: "#000"
    }
    return(
      <div>
        <div>
        <Keyboard
        className="keyboard"
        textField={
          <input
            style={keyStyle}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        }
        automatic
        onInput={this.onInput}
        layouts={[extendedKeyboard]}
      />
      </div>
        <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Submit</button>
      </div>
    )
  }
}

injectTapEventPlugin();