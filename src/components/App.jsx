import React, { Component } from 'react';
// import css from 'components/App.module.css';
import { InputForm } from 'components/InputForm/InputForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitForm = newContact => {
    const { contacts } = this.state;
    if (
      contacts.some(contact => {
        return contact.name === newContact.name;
      })
    ) {
      alert(`${newContact.name} is alredy in Phonebook `);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(5), ...newContact }],
    }));
  };

  onFilterContacts = query => {
    this.setState({ filter: query.target.value });
  };

  filteredContacts = () => {
    const { filter, contacts } = this.state;
    const list = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return list;
  };

  deleteContacts = contactId => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== contactId),
    });
    // contacts.filter(contact => contact.id !== idToRemove);
  };

  render() {
    const contacts = this.filteredContacts();

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          justifyContent: 'center',
          backgroundColor: 'antiquewhite',
          color: '#010101',
          gap: '30px',
          border: '1px solid black',
          borderRadius: '4px',
        }}
      >
        <InputForm onSubmitForm={this.onSubmitForm}></InputForm>
        <Contacts contacts={contacts} deleteContacts={this.deleteContacts}>
          <Filter
            onFilterContacts={this.onFilterContacts}
            value={this.state.filter}
          ></Filter>
        </Contacts>
      </div>
    );
  }
}
