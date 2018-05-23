import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Currency.css';

const Currency = props => (
  <li className="currencies">
    <p className="price">{props.currency}</p>
  </li>
);

Currency.propTypes = {
  currency: PropTypes.number.isRequired,
};

export default Currency;
