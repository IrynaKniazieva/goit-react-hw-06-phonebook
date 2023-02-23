import React from 'react';
import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import ContactForm from "components/ContactForm/ContactForm";
import ContactItem from "components/ContactItem/ContactItem";
import ContactList from "components/ContactList/ContactList";
import { nanoid } from 'nanoid';
import Filter from 'components/Filter/Filter';

const ContactsBook = () => {
    const [contacts, setContacts] = useLocalStorage('contacts', []);
    const [filter, setFilter] = useState('');

      //   // Добавление нового контакта
  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts(contacts => [newContact, ...contacts]);
  };

  //   // фильтр
  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  //   // Удаление контакта
  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  //   // Только видимые
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onAddContact={addContact}/>
            <h2>Contacts</h2>
            <Filter filter={filter} onChange={changeFilter} />
            <ContactList>
                <ContactItem contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}/>
            </ContactList>
        </div>
    )
}

export default ContactsBook;