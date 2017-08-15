import React, { Component } from 'react';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Form is submitted", this.state.email);
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit.bind(this) }>
                <input  autoFocus
                        type="email" 
                        value={ this.state.email } 
                        placeholder="@email"
                        onChange={ this.handleEmailChange.bind(this) }/>
                <button>Save</button>
            </form>
        );
    }
}

export default RegistrationForm;