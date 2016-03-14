import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>Dashboard</div>
    )
  }
}

ReactDOM.render(<Dashboard />, document.getElementById('main'));
