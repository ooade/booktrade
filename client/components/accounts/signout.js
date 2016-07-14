import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class SignOut extends Component {
  componentWillMount() {
    Meteor.logout();
  }

  componentDidMount() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        Logging out....
      </div>
    );
  }
};

export default SignOut;
