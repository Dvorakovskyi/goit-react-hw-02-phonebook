import React from 'react';
// import { nanoid } from 'nanoid';
import Contacts from 'components/Contacts/Contacts';

class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value});
  };

  handleSubmitForm = event => {
      event.preventDefault();

      this.state.contacts.push(this.state.name);

      this.reset();

      console.log(this.state)
    };
    
    reset = () => {
        this.setState({name: ''});
    }

  render() {
      return (
        <div>
      <section>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmitForm}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        </section>
              <Contacts contacts={this.state.contacts}/>
              </div>
    );
  }
}

export default Phonebook;
