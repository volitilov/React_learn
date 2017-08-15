import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';
import logo from './react.png';

class Header extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired    
    }

    render() {
        return (
            <div className="Header">
                <nav>
                    <ul>
                        <li><img src={ logo } alt=""/></li>
                        { this.props.data.map((item) =>
                            <li key={item.label} >
                                <a href={ item.link }>{ item.label }</a>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        );
    }
}


export default Header;