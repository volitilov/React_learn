import React from 'react';
import { Route, IndexRoute } from 'react-router';

// containers
import App from './containers/App';

// components
import Admin from './components/admin';
import Genre from './components/genre';
import Home from './components/home';
import List from './components/list';
import Reliase from './components/reliase';
import Login from './components/login';
import NotFound from './components/NotFound';


export const routes = (
  <div>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='login' component={ Login } />
      <Route path='admin' component={ Admin } onEnter={ Admin.onEnter }/>
      <Route path='genre/:genre' component={ Genre }>
        <Route path=":relise" component={ Reliase } />
      </Route>
      <Route path='list' component={ List } />
    </Route>
    <Route path='*' component={ NotFound } />
  </div>
);