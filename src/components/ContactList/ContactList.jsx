import React from 'react';
// import css from './ContactList.module.css';

const ContactList = ({ contacts, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
