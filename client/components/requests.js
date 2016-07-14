import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Books } from '../../imports/collections/books';

class TradeRequests extends Component {
  componentDidMount() {
    // $('.show-me').hide();
  }

  outstandingReq() {
    return this.props.outstanding.map(book => {
      return (
        <span>{book.title}</span>
      );
    });
  }

  render() {
    return (
      <div className="trade-req breadcrumb">
        <button className="btn btn-success">Your trade requests</button>
        <button className="btn btn-primary" style={{marginLeft: 5}}>Trade Requests for you</button>
        <div className="outstanding">
          <h3>Your outstanding requests:</h3>
          { this.outstandingReq() }
        </div>
      </div>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('books');
  const userId = Meteor.userId();

  return { outstanding: Books.find({ requestedBy: userId }).fetch() }
}, TradeRequests);
