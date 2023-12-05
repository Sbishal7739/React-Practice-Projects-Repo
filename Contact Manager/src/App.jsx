import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import { set } from 'react-hook-form'
import { nanoid } from '@reduxjs/toolkit'

function App() {
  const [contacts, setContacts] = useState([])

  const LOCAL_STORAGE_KEY = "contacts";

  const addContactHandler = (concontacttact) => {
    console.log(concontacttact);
    setContacts([...contacts, {id: nanoid(), ...concontacttact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contacts) => {
      return contacts.id != id;
    })
    setContacts(newContactList);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retriveContacts && retriveContacts.length > 0) {
      setContacts(retriveContacts);
    }
  }, [])
  

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId = {removeContactHandler} />
    </div>
  )
}

export default App
