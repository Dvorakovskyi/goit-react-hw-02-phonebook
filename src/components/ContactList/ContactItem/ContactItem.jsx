import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contacts }) => {
  return contacts.map(contact => {
    return (
      <li key={contact.id}>
        <p>
          {contact.name}: {contact.number}
        </p>
      </li>
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactItem;
