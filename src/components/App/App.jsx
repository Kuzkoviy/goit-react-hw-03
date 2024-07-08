
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useState, useEffect } from "react";
import initialContacts from '../../initialContacts.json'
import { nanoid } from 'nanoid'





function App() {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('saved-contacts');
    if(savedContacts) {
      return JSON.parse(savedContacts);
    }

    return initialContacts;
  });


  useEffect(() => {
    localStorage.setItem('saved-contacts', JSON.stringify(contacts))
  }, [contacts]);
  
  // Додавання контактів
  const addContact = (newContact) => {
    newContact.id = nanoid();
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    })
  }

  // Видалення контактів
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
       return prevContacts.filter(contact => contact.id !== contactId);
    })
  }


  const [filter, setFilter] = useState('');


  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd = {addContact}/>
        <SearchBox value={filter} onFilter={setFilter}/>
        <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
    </div>
  )
}

export default App;