import { createSlice } from '@reduxjs/toolkit';

const coctailsSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {},
});

export const coctailsReducer = coctailsSlice.reducer;
