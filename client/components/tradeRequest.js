import React from 'react';

export default (props) => {
  const onRemove = (book, event) => {
    event.preventDefault();

    Meteor.call('book.removeOutstanding', book);
  }

  const onAdd = (book, event) => {
    event.preventDefault();

    Meteor.call('book.acceptTrade', book);
  }

  const otherReq = () => {
    return props.books.map(book => {
      return (
        <li className="list-group-item" key={book._id}>
          {book.title}
          <i className="glyphicon glyphicon-ok" onClick={onAdd.bind(this, book)} />
          <i className="glyphicon glyphicon-remove" onClick={onRemove.bind(this, book)} />
        </li>
      );
    });
  }

  return (
    <div className="other-users">
      {props.books.length >= 1  && <h3>Trade requests for you:</h3>}
      <ul className="list-group">
        { otherReq() }
      </ul>
    </div>
  )
};
