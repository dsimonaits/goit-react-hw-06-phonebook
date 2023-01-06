import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Btn } from './Contact.styled';
import { Number } from './Contact.styled';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handelDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <p>
        {name}: <Number>{number}</Number>
      </p>
      <Btn type="button" onClick={handelDelete}>
        Delete
      </Btn>
    </>
  );
};

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
