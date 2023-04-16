import React, { Component } from 'react';
// import css from 'components/App.module.css';
import { InputForm } from 'components/InputForm/InputForm';
import { Contacts } from 'components/Contacts/Contacts';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(5), name: 'Eden Clements', number: '645-17-49' },
      { id: nanoid(5), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(5), name: 'Rosie Simpson', number: '459-12-56' },
    ],
    name: '',
  };

  onSubmitForm = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(5), ...newContact }],
    }));
  };

  render() {
    const contacts = this.state.contacts;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '420px',
          justifyContent: 'center',
          color: '#010101',
          gap: '30px',
        }}
      >
        <InputForm onSubmitForm={this.onSubmitForm}></InputForm>
        <Contacts contacts={contacts}></Contacts>
      </div>
    );
  }
}
