import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Books } from '../../imports/collections/books';

class ShowBooks extends Component {
  renderList() {
    if (!this.props.books) {
      return <div> Loading.... </div>
    }

    return this.props.books.map( book => {
      return (
        <li className="list-group-item" key={book._id}>
          <img src={book.thumbnail} />
          <button
            className="btn btn-sm btn-danger"
            onClick= { ()=> Meteor.call('book.remove', book) }
            >x</button>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="show-books">
        <ul className="list-group">
          { this.renderList() }
        </ul>
      </div>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('myBooks');

  return { books: Books.find({}).fetch() }
}, ShowBooks);
