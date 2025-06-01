import { Component } from 'react';
import ContactForm from './ContactForm';



class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  handleSubmit = () => {
  };

  render() {

    return (
      <>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={this.handleSubmit}/>
      </>
    );
  }
}

export default App;