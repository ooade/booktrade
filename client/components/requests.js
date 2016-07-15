import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Books } from '../../imports/collections/books';
import OutRequests from './outRequests';
import ReqApproved from './reqApproved';
import Request4u from './tradeRequest';
import RequestUA from './requestUApproved';

class TradeRequests extends Component {
  componentDidMount() {
    $('.outstanding, .reqApproved, .requestUApproved, .other-users').hide();

    $('.tr').click(() => {
      $('.requestUApproved, .other-users').toggle();
    });

    $('.yr').click(() => {
      $('.outstanding, .reqApproved').toggle();
    });
  }

  render() {
    return (
      <div className="trade-req breadcrumb">
        <button className="btn btn-success yr">Your trade requests</button>
        <button className="btn btn-primary tr" style={{marginLeft: 5}}>Trade Requests for you ({this.props.requestOthers.length})</button>
        <OutRequests outstanding={this.props.outstanding}/>
        <ReqApproved books={this.props.reqApproved} />
        <Request4u books={this.props.requestOthers} />
        <RequestUA books={this.props.requestUApproved} />
      </div>
    );
  }
};

export default createContainer(() => {
  const userId = Meteor.userId();

  return {
    outstanding: Books.find({ requestedBy: userId, purchased: false }).fetch(),
    requestOthers: Books.find({ ownerId: userId, requestedBy: { $nin: ["", null] }, purchased: false }).fetch(),
    requestUApproved: Books.find({ ownerId: userId, purchased: true }).fetch(),
    reqApproved: Books.find({ requestedBy: userId, purchased: true }).fetch()
  }
}, TradeRequests);
