import React, { Component } from 'react';

import './todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemValue: '',
      items: [],
    }
    this.items = [];
  }

    
  getValue(event) {
    this.items.push(this.state.itemValue);
    this.setState({
      items: this.items,
    })
    event.preventDefault();
  }

  changeValue(event) {
    this.setState({
      itemValue: event.target.value,
    });
  }

  render() {
    return (
      <div className="todo">
        <form onSubmit={ this.getValue.bind(this) }>
          <h5>This is todo</h5>
          <input  type="text" 
                  placeholder="add task" 
                  value={ this.state.itemValue }
                  onChange={ this.changeValue.bind(this) } />
        </form>
        <div className="todo-list">
          <ul>
            { this.state.items.map((obj, id) =>
              <li key={ id } onClick="">
                { obj }
              </li> 
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;