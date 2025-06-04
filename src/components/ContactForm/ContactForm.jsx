import React from 'react';
import css from './ContactForm.module.css';

class ContactForm extends React.Component {

  render() {
    return (
      <>
      <h1>Phonebook</h1>
        <form className={css.contactForm} onSubmit={this.props.handleSubmit}>
          <label>
            <h2  className={css.title}>Name:</h2>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-ЯҐґЄєІіЇї]+(([' \-][a-zA-Zа-яА-ЯҐґЄєІіЇї ])?[a-zA-Zа-яА-ЯҐґЄєІіЇї]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <h2  className={css.title}>Phone:</h2>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}([.\-\s]?\(?\d{1,3}\)?)?([.\-\s]?\d{1,4}){1,3}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
