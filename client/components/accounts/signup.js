import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = { message: '', messageClass: '' }
  }

  displayError(message) {
    this.setState({ message, messageClass: 'alert alert-danger small' });
  }

  onFormSubmit(event) {
    event.preventDefault();

    let { email, password } = this.refs;

    email = email.value.trim();
    password = password.value.trim();

    const user = { email, password };

    if (!email || !password) {
      this.displayError("Please enter email or password");
      return;
    }

    Accounts.createUser(user, err => {
      if (err) {
        this.displayError(err.reason);
        return;
      }

      browserHistory.push('/home');
    });
  }

  render() {
    return (
      <div className="signup">
        <form className="login-form" onSubmit={this.onFormSubmit.bind(this)}>
          <h4>Create An Account</h4><hr/>
          <div className={this.state.messageClass}>{this.state.message}</div>
          <div className="form-group">
            <input className="form-control" type="email" ref="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <input className="form-control" type="password" ref="password" placeholder="Type a password" />
          </div>
          <button type="submit" className="btn btn-success btn-block">Signup</button>
        </form>
      </div>
    );
  }
};
