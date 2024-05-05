import { useEffect, useState } from 'react'
import initialList from '../../../contacts.json'


import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import './App.css'

export default function App() {
  
  const [list, setList] = useState(() => {
    const localContacts = JSON.parse(localStorage.getItem("dataContacts"));
    return localContacts || initialList;
  });
  const [filter, setFilter] = useState('');
    

  useEffect(() => {
    localStorage.setItem("dataContacts", JSON.stringify(list))
  }, [list]);
  
  const addContact = (newContact) => {
    setList((prevContact) => {
      return [...prevContact, newContact];
    });
  };
  
  const deleteContact = (contactId) => {
    setList((prevContacts) => {
      return prevContacts.filter((item) => item.id !== contactId);
    });
  };

  const mainContact = list.filter((val) =>
    val.name.toLowerCase().includes(filter.toLowerCase())
  );


  
  return (<div>
    <h1>Phonebook</h1>
  <ContactForm onAdd={addContact} />
    <SearchBox value={filter} onFilter={setFilter} />
  <ContactList list={mainContact} onDelete={deleteContact} />
</div>
)
}
