import React from 'react';
import css from './ContactList.module.css';

const ContactList = ({ contacts, filter, delContact }) => {
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
    <h2 className={css.title}>Contacts</h2>
    <ul className={css.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.listItem}>
          <p>{name}</p>
          <p>{number}</p>
          <button onClick={() => delContact(id)} type="button" className={css.deleteBtn}>
                Delete
              </button>
        </li>
      ))}
    </ul>
    </>
  );
};

export default ContactList;
