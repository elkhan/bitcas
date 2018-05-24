import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css';

const Form = props => (
  <div className="form">
    <form className="currency_form">
      <label htmlFor="name">
        {['BTC ', 'ETH ', 'LTC ']}
        <br />
        <input
          type="text"
          placeholder="Enter currency"
          onChange={props.onHandleCurrency}
          name="name"
          value={props.name}
        />
      </label>
      <input type="button" value="Submit" onClick={props.onClickFetch} />
    </form>
  </div>
);

Form.propTypes = {
  onHandleCurrency: PropTypes.func.isRequired,
  onClickFetch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Form;
