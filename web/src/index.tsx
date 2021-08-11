import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/Home'
import LogIn from './pages/LogIn'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/login' component={LogIn} exact />
    </Switch>
  </Router>,
  document.getElementById('root')
);
