import React,  { Component } from 'react';

import './index.css';


class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        }
    }

    toggleState() {
        this.setState({
            isOpened: !this.state.isOpened
        });
    }

    render() {
        let dropdownText;
        if (this.state.isOpened) {
            dropdownText = <div className="dropd">Dropdown is opened.</div>;
        } 
        return (
           <div onClick={ this.toggleState.bind(this) } className="dropdown">
                <h3>IsOpened: { String(this.state.isOpened) }</h3>
                { dropdownText }
           </div>
        );
    }
}


export default Dropdown;