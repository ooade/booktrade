import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Landing from './components/landing';
import SignIn from './components/accounts/signin';
import SignUp from './components/accounts/signup';
import SignOut from './components/accounts/signout';
import AllBooks from './components/allbooks';
import MyBooks from './components/mybooks';
import RequireAuth from './components/auth/require_auth';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signout" component={SignOut} />
      <Route path="/allbooks" component={RequireAuth(AllBooks)} />
      <Route path="/mybooks" component={RequireAuth(MyBooks)} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('#app'));
});
