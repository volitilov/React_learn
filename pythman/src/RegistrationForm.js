import React, { Component } from 'react';
import './RegistrationForm.css';



class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('This is submitted', this.state.email);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleEmailChange}
            className='emailField'
          />
          <button className='submitBtn'>Submit</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
