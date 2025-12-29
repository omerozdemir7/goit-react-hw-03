import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import './App.css';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  // State: Kişiler (LocalStorage'dan başlatma veya varsayılan değer)
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  // State: Arama filtresi
  const [filter, setFilter] = useState('');

  // Effect: Contacts değiştiğinde LocalStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Kişi Ekleme Fonksiyonu
  const addContact = (newContact) => {
    const contactObj = {
      ...newContact,
      id: nanoid(),
    };
    setContacts((prevContacts) => [...prevContacts, contactObj]);
  };

  // Kişi Silme Fonksiyonu
  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  // Filtreleme Mantığı
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
