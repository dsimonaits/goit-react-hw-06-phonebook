import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [{ name: 'Sergii Dykyy', number: '07734', id: '1' }],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.contacts.push(payload);
      },
      prepare({ name, number }) {
        return { payload: { name, number, id: nanoid() } };
      },
    },

    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
