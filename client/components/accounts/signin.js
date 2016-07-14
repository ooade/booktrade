import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { message: '', messageClass: '' };
  }

  displayError(message) {
    this.setState({ message, messageClass: 'alert alert-danger small' });
  }

  onFormSubmit(event) {
    event.preventDefault();

    let { email, password } = this.refs;

    email = email.value.trim();
    password = password.value.trim();

    if (!email || !password) {
      this.displayError("Please Enter Username or Password");
      return;
    }

    Meteor.loginWithPassword(email, password, err => {
      if (err) {
        this.displayError(err.reason);
        return;
      }

      browserHistory.push('/mybooks');
    })
  }

  render() {
    return (
      <div className="signin container">
        <form className="login-form" onSubmit={this.onFormSubmit.bind(this)}>
          <h4>Login Form</h4><hr/>
          <div className="form-group">
            <div className={this.state.messageClass}>{this.state.message}</div>
            <input type="email" ref="email" placeholder="email" className="form-control"/>
          </div>
          <div className="form-group">
            <input type="password" ref="password" placeholder="password" className="form-control"/>
          </div>
          <button className="btn btn-success btn-sm">Submit</button>
        </form>
      </div>
    );
  }
};

export default SignIn;
