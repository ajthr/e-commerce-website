import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/Home'
import LogIn from './pages/LogIn'
import VerifyEmail from './pages/VerifyEmail'
import ProductList from './pages/ProductList'
import Product from './pages/Product'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/login' component={LogIn} exact />
      <Route path='/login/email_verification' component={VerifyEmail} />
      <Route path='/p' component={ProductList} exact />
      <Route path='/p/:id' component={Product} exact />
    </Switch>
  </Router>,
  document.getElementById('root')
);
