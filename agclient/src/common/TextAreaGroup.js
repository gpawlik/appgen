import React from 'react';
import classNames from 'classnames';

const TextAreaGroup = ({ field, value, label, error, onChange }) => {
  return (
    <div className={classNames({ 'form-input-group': true, 'form-input-error': !!error })}>
      <label className="form-label">{label}</label>
      <textarea
        onChange={onChange}
        value={value}
        name={field}
        className="form-textarea"
      ></textarea>
      {error && <span className="form-error-label">{error}</span>}
    </div>
  );
};

TextAreaGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
};

export default TextAreaGroup;
