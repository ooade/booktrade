import React, { Component } from 'react';
import axios from 'axios';
import ShowBooks from './showbooks';
import TradeRequests from './requests';

const API_KEY = 'AIzaSyByTrUxFetKLr04s88TCOESt1WVyu9nGDs';

class MyBooks extends Component {
  onBookSubmit(event) {
    event.preventDefault();

    const BOOK = this.refs.bookname.value;
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${BOOK}&key=${API_KEY}`;

    axios.get(URL)
      .then(response => {
        response = response.data.items[0].volumeInfo;
        const data = { thumbnail: response.imageLinks.thumbnail, title: response.title }

        Meteor.call('books.insert', data, (error, books) => {
          if (error) { console.log(error.reason); }

          this.refs.bookname.value = "";
        })
      })
      .catch( error => {
          // Network Error and Search Error
        }
      );
  }

  render() {
    return (
      <div className="my-books">
        <TradeRequests />
        <div className="breadcrumb">
          <h3>My Books:</h3>
          <form className="form-inline" onSubmit={this.onBookSubmit.bind(this)}>
            <div className="form-group">
              <input type="text" ref="bookname" className="form-control"/>
            </div>
            <button className="btn btn-primary" style={{marginLeft: 10}}>Add</button>
          </form>
        </div>
        <ShowBooks />
      </div>
    );
  }
};

export default MyBooks;
