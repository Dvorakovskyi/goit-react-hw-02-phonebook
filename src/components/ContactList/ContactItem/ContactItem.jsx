import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li key={id}>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
