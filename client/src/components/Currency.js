import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Currency.css';

const Currency = props => (
  <li className="currencies">
    <span id="remove" onClick={props.onCurrencyRemove}>
      x
    </span>
    <p>
      {props.name}: {props.value}
    </p>
  </li>
);

Currency.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  onCurrencyRemove: PropTypes.func.isRequired,
};

Currency.defaultProps = {
  name: '',
  value: undefined,
};

export default Currency;
