import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactForm2 from './ContactForm2';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import Notiflix from 'notiflix';

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

  handleRemoveContact = (id) => {
		this.setState((prev) => ({
			contacts: prev.contacts.filter((contact) => contact.id !== id),
		}))};

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    // this.setState(({ contacts }) => ({
    //   contacts: [...contacts, contact],
    // }));
    if (
      this.state.contacts.find(
        existingContact => existingContact.name === contact.name
      )
    ) {
      Notiflix.Notify.failure(`Contact ${contact.name} is already`);
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
      Notiflix.Notify.success(
        `Contact ${contact.name} added to  your phonebook`
      );
    }
    // form.reset();
  };

  handleSubmit2 = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      this.state.contacts.find(
        existingContact => existingContact.name === contact.name
      )
    ) {
      Notiflix.Notify.failure(`Contact ${contact.name} is already`);
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
      Notiflix.Notify.success(
        `Contact ${contact.name} added to  your phonebook`
      );
    }
    // form.reset();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    // this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <ContactForm handleSubmit={this.handleSubmit} />

        <Filter filter={filter} handleChange={this.handleChange} />
        <ContactList contacts={contacts} filter={filter} delContact={this.handleRemoveContact}/>
        <ContactForm2 handleSubmit2={this.handleSubmit2} />
      </>
    );
  }
}

export default App;
