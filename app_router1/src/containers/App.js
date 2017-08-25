import React, { Component } from 'react';

// components
import Header from '../components/header';


export default class extends Component {
  render() {
    return (
      <div className='app'>
        <Header />

        { this.props.children }
      </div>
    )
  }
}
