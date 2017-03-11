import React from 'react';

const MultiSelectGroupItem = ({ id, title, selected, onClick }) => {
  return (
    <li onClick={onClick.bind(this, id)}>{title} {selected && '[selected]'}</li>
  );
};

MultiSelectGroupItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  selected: React.PropTypes.bool,
  onClick: React.PropTypes.func
};

export default MultiSelectGroupItem;
