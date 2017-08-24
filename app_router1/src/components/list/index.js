import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
  render() {
    return (
      <section>
        <h3>Список жанров</h3>
        <ul>
          <li><Link to='/genre/house'>House</Link></li>
          <li><Link to='/genre/dance'>Dance</Link></li>
          <li><Link to='/genre/clasic'>Clasic</Link></li>
        </ul>

      </section>
    );
  }
}