import React, { Component } from 'react';


class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state ={
      email: '',
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.email);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <input  type="email" 
                placeholder="email" 
                value={ this.state.email } 
                ref="myTestInput"/>
        <button>Save</button>
      </form>
    )
  }
}

export default RegistrationForm;
