import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterValue: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { filterValue } = filterSlice.actions;

export default filterSlice.reducer;
