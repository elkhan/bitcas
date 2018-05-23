import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './components/Form';
import Currency from './components/Currency';
import fetchCurrency from './actions/fetchCurrency';
import './App.css';

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
    // TODO:
  }

  onHandleCurrency(event) {
    event.preventDefault();
    this.setState({
      // Not neccessary since one model only
      [event.target.name]: event.target.value,
    });
  }

  onClickFetch(event) {
    event.preventDefault();
    this.props.fetchCurrency(this.state.currency);
  }

  render() {
    return (
      <div className="main">
        <Currency currency={this.props.currency} />
        <Form
          onHandleCurrency={this.onHandleCurrency}
          onClickFetch={this.onClickFetch}
          currency={this.state.currency}
        />
      </div>
    );
  }
}

App.propTypes = {
  currency: PropTypes.number.isRequired,
  fetchCurrency: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchCurrency: currency => dispatch(fetchCurrency(currency)),
});

/* eslint-disable no-unused-vars */
const mapStateToProps = (state, ownProps) => ({
  /* eslint-enable */
  currency: state.currency,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
