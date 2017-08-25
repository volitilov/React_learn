import React, { Component } from 'react';
import { PropTypes } from 'prop-types';


export default class Home extends Component {
  componentDidMount() {
    this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
  }

  routerWillLeave() {
      // let answer = window.confirm('Вы уверены?');
      // if (!answer) return false;
      return 'Вы уверены ?';
  }

  handleSubmit(e) {
    e.preventDefault();
    const value = e.target.elements[0].value.toLowerCase();
    this.context.router.push(`/genre/${ value }`);
  }

  render() {
    return (
      <section className='home'>
        <div >Раздел /</div>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" placeholder="genreName" />
          <button type="submit">Перейти</button>
        </form>
      </section>
    )
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
}
