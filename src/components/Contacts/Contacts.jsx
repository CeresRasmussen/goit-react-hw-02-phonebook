import css from 'components/Contacts/Contacts.module.css';

export const Contacts = ({ contacts }) => {
  console.log('contacts:', contacts);
  return (
    <section>
      <h2 className={css.title}>Contacts</h2>
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
