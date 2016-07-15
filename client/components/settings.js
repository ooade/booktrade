import React, { Component } from 'react';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = { message: "", messageClass: "hidden"}
  }

  displayMessage(message, messageClass) {
    this.setState({ message, messageClass });
  }

  onFormSubmit(event) {
    event.preventDefault();

    let { city, state } = this.refs;
    city = city.value.trim();
    state = state.value.trim();

    if (!city || !state) {
      this.displayMessage("Add City and State", "alert alert-danger");
      return ;
    }

    Meteor.call('updateProfile', { city, state });

    this.displayMessage("Profile Updated!", "alert alert-success");
    this.refs.city.value = "";
    this.refs.state.value = "";
  }

  render() {
    return (
      <div className="settings container">
        <h2> Update Profile </h2>
        <div className={this.state.messageClass}>{this.state.message}</div>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <div className="form-group">
            <label> City </label>
            <input type="text" className="form-control" ref="city" onChange={()=> this.displayMessage("","hidden")} />
          </div>
          <div className="form-group">
            <label> State </label>
            <input type="text" className="form-control" ref="state" onChange={()=> this.displayMessage("","hidden")} />
          </div>
          <button className="btn btn-primary btn-lg">Save Changes</button>
        </form>
      </div>
    ) ;
  }
};
