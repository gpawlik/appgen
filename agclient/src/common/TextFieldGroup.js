import React, { PropTypes } from 'react';
import classNames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, placeholder, onChange, onFocus, checkUserExists }) => {
  return (
    <div className={classNames({ 'form-input-group': true, 'form-input-error': !!error })}>
      <label className="form-label">{label}</label>
      <input
        onChange={onChange}
        onFocus={onFocus}
        onBlur={checkUserExists}
        value={value}
        type={type}
        name={field}
        placeholder={placeholder}
        className="form-input"
      />
      {error && <span className="form-error-label">{error}</span>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
