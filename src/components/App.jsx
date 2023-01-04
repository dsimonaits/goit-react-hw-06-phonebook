import { useDispatch, useSelector } from 'react-redux';
import Section from './Section';
import ContactForm from './ContactForm';
import FilterByName from './Filter';
import ContactList from './ContactList';
import { getContacts, getFilter } from 'redux/contacts/contacts-selectors';
import {
  deleteContact,
  addContact,
  filterValue,
} from 'redux/contacts/contactsSlice';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const addContacts = contact => {
    contacts.find(({ name }) => name === contact.name)
      ? alert(`${contact.name} is already in contacts`)
      : dispatch(addContact(contact));
  };

  const deleteContacts = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilterValue = ({ target: { value } }) => {
    dispatch(filterValue(value));
  };

  const filterContactsByName = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <Section title="Phonebook" border="false">
        <ContactForm addContacts={addContacts} />
      </Section>
      <Section title="Contacts" border="true">
        {contacts.length === 0 ? (
          <p>Sorry your contact list is empty. Add someone.</p>
        ) : (
          <FilterByName value={filter} onChange={getFilterValue} />
        )}

        <ContactList
          contacts={filterContactsByName()}
          onDeleteContact={deleteContacts}
        />
      </Section>
    </>
  );
};

export default App;
