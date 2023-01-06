import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import Contact from 'components/Contact';
import { List } from './ContactList.styled';
import { ListItem } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContactsByName = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <List>
      {filterContactsByName().map(({ name, number, id }) => (
        <ListItem key={id}>
          {' '}
          <Contact name={name} number={number} id={id} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
