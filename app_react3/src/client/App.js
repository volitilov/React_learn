import React, { Component } from 'react';

import './App.css';

import Header from './components/header/header';
import Dropdown from './components/dropdown/dropdown';
import RegistrationForm from './components/registrationForm/registrationForm';

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
      </div>
    )
  }
}

export default App;