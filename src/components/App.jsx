import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;
    const contact = {
      id: nanoid(),
      name: name,
      number: phone,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
    form.reset();
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <Filter filter={filter} handleChange={this.handleChange} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} filter={filter} />
      </>
    );
  }
}

export default App;
