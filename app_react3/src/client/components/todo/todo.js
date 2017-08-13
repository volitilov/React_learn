import React, { Component } from 'react';

import './todo.css';

class TodoList extends Component {
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
  
  removeItem(obj) {
    let mas = [];
    for (let i in this.items) {
      if (this.items[i] === obj) {
        delete this.items[i];
      }
      if (this.items[i] !== undefined) {
        mas.push(this.items[i]);
      }
    }
    this.items = mas;
    this.setState({
     items: this.items,
    });
    console.log(obj);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      ['item_' + name]: value
    });
  }
  
  render() {
    return (
      <div className="todo">
        <form onSubmit={ () => this.getValue(event) }>
          <input  type="text" 
                  placeholder="add task" 
                  value={ this.state.itemValue }
                  onChange={ () => this.changeValue(event) } />
          <button>Save</button>
        </form>
        <div className="todo-list">
          <ul>
            { this.state.items.map((obj, id) =>
              <li key={ id }>
                <input
                  name={ id }
                  type="checkbox"
                  onChange={ () => this.handleInputChange(event) } />
                { obj }
                <button onClick={ () => this.removeItem(obj) }>X</button>
              </li> 
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;