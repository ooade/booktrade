import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';

// Higher Order Component --->
export default function(ComposedComponent) {
  class Auth extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        browserHistory.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return createContainer(props => {
    const authenticated = Meteor.userId() ? true : false;

    return { authenticated }
  }, Auth);
}
