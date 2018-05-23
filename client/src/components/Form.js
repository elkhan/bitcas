import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Form.css';

const Form = props => (
  <div className="login_form">
    <form className="login_form">
      <input
        type="text"
        placeholder="Enter currency"
        name="currency"
        onChange={props.onHandleCurrency}
        value={props.currency}
      />
      <input type="button" value="Submit" onClick={props.onClickFetch} />
    </form>
  </div>
);

Form.propTypes = {
  onHandleCurrency: PropTypes.func.isRequired,
  onClickFetch: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Form;
