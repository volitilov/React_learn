import React, { Component } from 'react';

// components
import NavLink from '../NavLink';


export default class extends Component {
  render() {
    return (
      <header className="header">
        <ul>
          <li><NavLink onlyActiveOnIndex={ true } to='/'>Главная</NavLink></li>
          <li><NavLink to='/admin'>Админка</NavLink></li>
          <li><NavLink to='/list'>Список жанров</NavLink></li>
          <li><NavLink to='/login'>Войти</NavLink></li>
        </ul>
      </header>
    );
  }
}