import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Books } from '../../imports/collections/books';
import TradeRequests from './requests';

class AllBooks extends Component {
  onRequest(book, event) {
    event.preventDefault();

    Meteor.call('book.request', book);
  }

  renderList() {
    if (!this.props.books) {
      return <div> Loading.... </div>
    }

    return this.props.books.map( book => {
      return (
        <li className="list-group-item" key={book._id}>
          <img src={book.thumbnail} />
          { book.ownerId !== this.props.userId && book.requestedBy === "" && <button onClick={this.onRequest.bind(this, book)} className="btn btn-sm btn-block btn-success"> Request </button>}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="all-books">
        <TradeRequests />
        <ul className="list-group">
          { this.renderList() }
        </ul>
      </div>
    );
  }
};

export default createContainer(()=> {
  Meteor.subscribe('books');

  return { books: Books.find().fetch(), userId: Meteor.userId() }
}, AllBooks);
