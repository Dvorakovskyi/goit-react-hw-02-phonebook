import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <section>
      <ul>
        <ContactItem contacts={contacts} />
      </ul>
    </section>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
