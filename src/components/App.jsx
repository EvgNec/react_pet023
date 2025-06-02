import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid'
import LoginForm from './LoginForm';



class App extends Component {
  state = {
    contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
      filter: '',
      name: '',
      number: ''
  }

  
  handleSubmit = (e) => {
    e.preventDefault();  
    const form = e.currentTarget;
    const name = form.elements.name.value;   
    const phone = form.elements.number.value;    
    const contact = {
      id: nanoid(),
      name:name,
      number: phone,
    }; 
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
    form.reset();
  };


  render() {
    const { contacts } = this.state;
    return (
      <>
      <LoginForm onSubmit={values => console.log(values)}/>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={this.handleSubmit}/>

      <h2>Contacts</h2>
      <ContactList contacts={contacts}/>
      </>
    );
  }
}

export default App;