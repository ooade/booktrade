import React from 'react';

export default (props) => {
  const onRemove = (book, event) => {
    event.preventDefault();

    Meteor.call('book.unApprove', book);
  }

  const reqApproved = () => {
    return props.books.map(book => {
      return (
        <li className="list-group-item" key={book._id}>
          {book.title} <i className="glyphicon glyphicon-remove" onClick={onRemove.bind(this, book)} />
        </li>
      );
    });
  }

  return (
    <div className="requestUApproved">
      {props.books.length >= 1  && <h3>Requests you approved:</h3>}
      <ul className="list-group">
        { reqApproved() }
      </ul>
    </div>
  )
};
