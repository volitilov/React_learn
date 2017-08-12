import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    }
  }

  toggleState() {
    this.setState({
      isOpened: !this.state.isOpened,
    });
  }
  
  render() {
    let dropdowntext;

    if (this.state.isOpened === true) {
      dropdowntext = <div>This dropdown: true</div>;
    } else {
      dropdowntext = <div>This dropdown: false</div>;
    }
    
    return (
      <div>
        { dropdowntext }
        <button onClick={ this.toggleState.bind(this) }>...Click...</button>
      </div>
    )
  }
}

export default Dropdown;