import css from 'components/Contacts/Contacts.module.css';
import React from 'react';

export const Contacts = ({ contacts, children }) => {
  console.log('contacts:', contacts);
  return (
    <section>
      <h2 className={css.title}>Contacts</h2>
      {children}
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            {name}: {number}
          </li>
        ))}
      </ul>
    </section>
  );
};
