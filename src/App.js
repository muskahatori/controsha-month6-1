import { useState } from 'react';
import { useContactsStore } from './store';

function App() {
  const contacts = useContactsStore(s => s.contacts);
  const addContact = useContactsStore(s => s.addContact);
  const removeContact = useContactsStore(s => s.removeContact);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAdd = () => {
    if (name.trim() === '' || phone.trim() === '') return;
    addContact(name, phone);
    setName('');
    setPhone('');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Контакты</h1>

      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleAdd}>Добавить</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} — {contact.phone}
            <button onClick={() => removeContact(contact.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;