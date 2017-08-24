import React, { Component } from 'react';
import { Link } from 'react-router';

// style
import './index.css';

export default class extends Component {
  render() {
    return <Link  { ...this.props } activeClassName="active" />
  }
}