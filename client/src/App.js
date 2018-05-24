import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './components/Form';
import Currency from './components/Currency';
import * as currencyActions from './actions/currencyActions';

import './App.css';

// No time to separate components into containers
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: { name: '' },
    };

    this.onHandleCurrency = this.onHandleCurrency.bind(this);
    this.onClickFetch = this.onClickFetch.bind(this);
  }

  componentDidMount() {
    // TODO:
  }

  onHandleCurrency(event) {
    event.preventDefault();
    const { currency } = this.state;
    currency.name = event.target.value;
    this.setState({
      currency,
    });
  }

  onClickFetch(event) {
    event.preventDefault();
    this.props.fetchCurrency(this.state.currency);
  }

  render() {
    return (
      /* eslint no-underscore-dangle: 0 */
      <div className="main">
        <div className="form">
          <Form
            onHandleCurrency={this.onHandleCurrency}
            onClickFetch={this.onClickFetch}
            name={this.state.currency.name}
          />
        </div>
        <div className="currency_container">
          <ul>
            {this.props.currencies.map(currency => (
              <Currency key={currency._id} name={currency.name} value={currency.value} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      currency: {
        name: PropTypes.string,
        value: PropTypes.number,
      },
    })
  ).isRequired,
  fetchCurrency: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchCurrency: crypto => dispatch(currencyActions.asyncFetchCurrency(crypto)),
});

/* eslint-disable no-unused-vars */
const mapStateToProps = (state, ownProps) => ({
  /* eslint-enable */
  currencies: state.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
