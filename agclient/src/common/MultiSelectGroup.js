import React from 'react';
import classNames from 'classnames';

const MultiSelectGroup = ({ field, label, error, onChange, children }) => {
  return (
    <div className={classNames({ 'form-input-group': true, 'form-input-error': !!error })}>
      <label className="form-label">{label}</label>
      <ul className="multi-choice-list">
        {children}
      </ul>
    {error && <span className="form-error-label">{error}</span>}
    </div>  );
}

MultiSelectGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,  
  onChange: React.PropTypes.func
}

export default MultiSelectGroup;