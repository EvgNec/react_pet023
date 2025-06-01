import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}</p> <p>{number}</p>
      </li>
    ))}
  </ul>
);

export default ContactList;
