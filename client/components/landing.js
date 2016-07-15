import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="jumbotron center landing-jumbo">
          <h1>Realtime Booktrade</h1>
          <h3>Traders connect to readers. Readers connect to traders</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-6 center">
              Catalog your books online
            </div>
            <div className="col-xs-6 center">
              See all of the books our users own
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 center">
              Request to borrow other user's books in Realtime
            </div>
            <div className="col-xs-6 center">
              Easily manage books and request from your dashboard
            </div>
          </div>
        </div>
      </div>
    );
  }
};
