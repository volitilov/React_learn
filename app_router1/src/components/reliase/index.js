import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <section className="reliase">
        <h3>{ this.props.params.release.replace(/-/g,' ') }</h3>
      </section>
    );
  }
}