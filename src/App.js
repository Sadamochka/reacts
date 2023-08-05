import React, { useState } from 'react';

const contacts = [
  { name: "Барней", surname: "Стинсовський",  phone: "+380956319521", gender: "male", },
  { name: "Робін", surname: "Щербатська", phone: "+380931460123", gender: "female" },
  { name: "Анонімний", surname: "Анонімус", phone: "+380666666666", gender: "" },
  { name: "Лілія", surname: "Олдровна", phone: "+380504691254", gender: "female" },
  { name: "Маршен", surname: "Еріксонян", phone: "+380739432123", gender: "male" },
  { name: "Теодор", surname: "Мотсбес", phone: "+380956319521", gender: "male" },
  
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = event => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  
  const filteredContacts = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(searchTerm) ||
    contacts.surname.toLowerCase().includes(searchTerm) ||
    contacts.phone.includes(searchTerm) ||
    contacts.gender.toLowerCase().includes(searchTerm)
  );


  
  return (
    <div>
      <h1>Contact Search</h1>
      <input
        type="text"
        placeholder="Search by name, surname, gender, or phone number"
        value={searchTerm}
        onChange={handleSearch}
      />
     
      <ul>
        {filteredContacts.map((contact, index) => (
          <li key={index}>
            {contact.name} {contact.surname} -  Phone: {contact.phone}, {contact.gender},
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
