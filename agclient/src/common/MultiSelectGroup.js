import React from 'react';
import classNames from 'classnames';

const MultiSelectGroup = ({ field, value, label, error, onChange }) => {
  return (
    <div className={classNames({ 'form-input-group': true, 'form-input-error': !!error })}>
      <label className="form-label">{label}</label>
      <ul className="multi-choice-list">
        <li data-value="opt1">Option 1</li>
        <li data-value="opt2">Option 2</li>
        <li data-value="opt3">Option 3</li>
        <li data-value="opt4">Option 4</li>
      </ul>
    {error && <span className="form-error-label">{error}</span>}
    </div>  );
}

MultiSelectGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.array.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,  
  onChange: React.PropTypes.func
}

export default MultiSelectGroup;