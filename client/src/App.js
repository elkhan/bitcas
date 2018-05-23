import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

// Testing routes. This will move to middleware
const url = 'http://localhost:5000/api/currency';

const fetchSample = () => {
  fetch(url)
    .then(results => results.json())
    .then(data => {
      console.log(data);
    });
};
// No time to separate components into containers
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: '',
    };

    this.onHandleCurrency = this.onHandleCurrency.bind(this);
    this.onClickFetch = this.onClickFetch.bind(this);
  }

  componentDidMount() {
    fetchSample();
  }

  onHandleCurrency(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onClickFetch() {}

  render() {
    return (
      <div className="main">
        <Form onHandleCurrency={this.onHandleCurrency} onClickFetch={this.onClickFetch} value={this.state.currency} />
      </div>
    );
  }
}

export default App;
