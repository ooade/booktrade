import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Books } from '../../imports/collections/books';
import OutRequests from './outRequests';

class TradeRequests extends Component {
  componentDidMount() {
    // $('.show-me').hide();
  }

  otherReq() {
    return this.props.requestOthers.map(book => {
      return (
        <li className="list-group-item" key={book._id}>
          {book.title}
          <i className="glyphicon glyphicon-ok" onClick={()=> console.log("ewoo")} />
          <i className="glyphicon glyphicon-remove" onClick={()=> console.log("ewoo")} />
        </li>
      );
    });
  }

  render() {
    return (
      <div className="trade-req breadcrumb">
        <button className="btn btn-success">Your trade requests</button>
        <button className="btn btn-primary" style={{marginLeft: 5}}>Trade Requests for you</button>
        <OutRequests outstanding={this.props.outstanding}/>
        <div className="other-users">
          {this.props.requestOthers.length >= 1  && <h3>Trade requests for you:</h3>}
          <ul className="list-group">
            { this.otherReq() }
          </ul>
        </div>
      </div>
    );
  }
};

export default createContainer(() => {
  const userId = Meteor.userId();

  return {
    outstanding: Books.find({ requestedBy: userId }).fetch(),
    requestOthers: Books.find({ ownerId: userId, requestedBy: { $nin: ["", null] } }).fetch()
  }
}, TradeRequests);
