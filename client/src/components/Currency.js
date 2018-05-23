import React from 'react';
import PropTypes from 'prop-types';

const Currency = props => (
  <li className="bookmark">
    <p className="price">{props.currency}</p>
  </li>
);

Currency.propTypes = {
  currency: PropTypes.number.isRequired,
};

export default Currency;
