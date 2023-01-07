import Section from './Section';
import ContactForm from './ContactForm';
import FilterByName from './Filter';
import ContactList from './ContactList';

const App = () => {
  return (
    <>
      <Section title="Phonebook" border="false">
        <ContactForm />
      </Section>

      <Section title="Contacts" border="true">
        <FilterByName />
        <ContactList />
      </Section>
    </>
  );
};

export default App;
