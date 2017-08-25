import React, { Component } from 'react';
import { PropTypes } from 'prop-types';


export default class Login extends Component {  
  handleSubmit(e) {
    e.preventDefault();
    
    const value = e.target.elements[0].value;
    
    if (value !== 'admin') {
      this.context.router.push('/');
    } else {
      window.localStorage.setItem('rr_login', value);
      this.context.router.push('/admin');
    }
  }

  render() {
    return (
      <section>
        <h3>Войти на сайт</h3>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" placeholder="login" autoFocus/>
          <button>Войти</button>
        </form>
      </section>
    );
  }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
}