import React, { Component } from 'react';
import { Link } from 'react-router';


export default class extends Component {
  render() {
    return (
      <section className='not-found'>
        <div>Страница не найдена. Вернуться на <Link to='/'>главную</Link>?</div>
      </section>
    )
  }
}
