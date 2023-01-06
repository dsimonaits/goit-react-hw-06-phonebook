import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import Section from './Section';
import ContactForm from './ContactForm';
import FilterByName from './Filter';
import ContactList from './ContactList';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Section title="Phonebook" border="false">
        <ContactForm />
      </Section>
      <Section title="Contacts" border="true">
        {contacts.length === 0 ? (
          <p>Sorry your contact list is empty. Add someone.</p>
        ) : (
          <FilterByName />
        )}

        <ContactList />
      </Section>
    </>
  );
};

export default App;
