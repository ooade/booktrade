import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

class Header extends Component {
  render() {
    if (this.props.authenticated) {
      return (
        <nav className="nav navbar-inverse">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand"> Booktrade </Link>
          </div>
          <div className="container">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/allbooks"> All Books </Link>
              </li>
              <li>
                <Link to="/mybooks"> My Books </Link>
              </li>
              <li>
                <Link to="/settings">
                  <i className="glyphicon glyphicon-cog" />
                </Link>
              </li>
              <li>
                <Link to="/signout"> signout </Link>
              </li>
            </ul>
          </div>
        </nav>
      )
    }
    return (
      <nav className="nav navbar-inverse">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand"> Booktrade </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/signIn">SignIn</Link>
          </li>
          <li>
            <Link to="/signUp">SignUp</Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default createContainer(props => {
  const authenticated = Meteor.userId() ? true : false;

  return { authenticated }
}, Header);
