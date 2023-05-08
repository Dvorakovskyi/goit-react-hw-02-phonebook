import React from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import ContactForm from './ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = data => {
      const newContact = {
        id: nanoid(),
        name: data.name,
        number: data.number,
      };

      const currentContact = this.state.contacts;

      const updateContacts = [...currentContact, newContact];

      this.setState({ contacts: updateContacts });
    }

  handleChangeFilter = event => {
    const { value } = event.currentTarget;

    this.setState({ filter: value });
  };

  getContact = () => {
    const { filter, contacts } = this.state;

    const findContact = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .trim()
        .includes(filter.toLowerCase().trim());
    });
    return findContact;
  };

  // checkContact = (name) => {
  //   if (this.state.contacts.name.includes(name)) {
  //     Notify.failure(`${name} is already in contacts`)
  //   }
  //   return;
  // };
  checkContact = name => {
    const normalizedName = name.toLowerCase().trim();
    const { contacts } = this.state;
    const foundName = contacts.find((contact) => {
      return contact.name.toLowerCase.trim() === normalizedName;
    })
    }

  render() {
    const foundContact = this.getContact();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChangeFilter} />
        <ContactList contacts={foundContact} />
      </div>
    );
  }
}

export default App;
