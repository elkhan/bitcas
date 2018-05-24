import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Currency.css';

const Currency = props => (
  <li className="currencies">
    <p>
      {props.name}: {props.value}
    </p>
  </li>
);

Currency.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
};

Currency.defaultProps = {
  name: '',
  value: undefined,
};

export default Currency;
