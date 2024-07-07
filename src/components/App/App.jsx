
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useState, useEffect } from "react";
import initialContacts from '../../initialContacts.json'
import { nanoid } from 'nanoid'





function App() {

  const [contacts, setContacts] = useState(initialContacts);
  
  // Додавання контактів
  const addContact = (newContact) => {
    newContact.id = nanoid();
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    })
  }


  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
       return prevContacts.filter(contact => contact.id !== contactId);
    })
  }


  return (
    <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd = {addContact}/>
        <SearchBox/>
        <ContactList contacts={contacts} onDelete={deleteContact}/>
    </div>
  )
}

export default App;