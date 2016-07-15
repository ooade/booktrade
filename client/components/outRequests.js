import React from 'react';

export default (props) => {
  const onRemove = (book, event) => {
    event.preventDefault();
    
    Meteor.call('book.removeOutstanding', book);
  }

  const outstandingReq = () => {
    return props.outstanding.map(book => {
      return (
        <li className="list-group-item" key={book._id}>
          {book.title} <i className="glyphicon glyphicon-remove" onClick={onRemove.bind(this, book)} />
        </li>
      );
    });
  }

  return (
    <div className="outstanding">
      {props.outstanding.length >= 1  && <h3>Your outstanding requests:</h3>}
      <ul className="list-group">
        { outstandingReq() }
      </ul>
    </div>
  )
};
