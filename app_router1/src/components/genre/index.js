import React, { Component } from 'react';


export default class extends Component {
  render() {
    if (this.props.params.reliase) {
      return (
        <section className='genre'>
          <h3>{ this.props.params.genre }</h3>
          <div>{ this.props.children }</div>
        </section>
      );
    } else {
      return (
        <section className='genre'>
          <h3>{ this.props.params.genre }</h3>
          <div>List items</div>
        </section>
      )
    }
  }
}