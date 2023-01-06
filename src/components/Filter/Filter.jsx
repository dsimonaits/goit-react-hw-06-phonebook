import { useDispatch, useSelector } from 'react-redux';
import { filterValue } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Label } from './Filter.styled';

const FilterByName = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const setFilterValue = ({ target: { value } }) => {
    dispatch(filterValue(value));
  };
  return (
    <Label>
      Find contacts by name
      <input
        onChange={setFilterValue}
        type="text"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        autoComplete="off"
      />
    </Label>
  );
};

export default FilterByName;
