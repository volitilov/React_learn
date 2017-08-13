import React, { Component } from 'react';

import './App.css';

import Header from './components/header/header';
import Dropdown from './components/dropdown/dropdown';
import RegistrationForm from './components/registrationForm/registrationForm';
import TodoList from './components/todo/todo';

const menu = [
  {
    link: "/",
    label: "Home"
  },
  {
    link: "/about",
    label: "About"
  },
  {
    link: "/portfolio",
    label: "Portfolio"
  },
  {
    link: "/contacts",
    label: "Contacts"
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <Header data={ menu } />
        <Dropdown />
        <RegistrationForm />
        <TodoList />
      </div>
    )
  }
}

export default App;