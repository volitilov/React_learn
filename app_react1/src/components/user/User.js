import React, { Component } from 'react';

import img from '../../foto.jpg';

class User extends Component {
    render() {
        return (
            <div>
                <img src={ img } alt={ this.props.name } />
                <h3>Hello { this.props.name || 'User' }</h3>
            </div>
        );
    }
}

export default User;