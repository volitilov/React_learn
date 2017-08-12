import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './header.css';

class Header extends Component {
  static PropTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    return (
      <nav className="header"> 
        { this.props.data.map((item, index) =>
          <li key={ index } >
              <a href={ item.link }>{ item.label }</a>
          </li>
        )}
      </nav>
    )
  }
}

export default Header;