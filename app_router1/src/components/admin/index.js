import React, { Component } from 'react'


export default class extends Component {
  static onEnter(nextState, replace) {
    const login = window.localStorage.getItem('rr_login');
  
    if (login !== 'admin') {
      replace('/');
    }
  }
  
  render() {
    return (
      <section className='admin'>
        <div >Раздел /admin</div>
      </section>
    )
  }
}
