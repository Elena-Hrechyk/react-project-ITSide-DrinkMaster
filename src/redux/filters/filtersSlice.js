import { createSlice } from '@reduxjs/toolkit';
import { getCategories, getIngredients, getGlasses } from './filtersOperation';

export const hanlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    searchQuery: '',
    categories: [],
    ingredients: [],
    glasses: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getCategories.pending, hanlePending)
      .addCase(getCategories.fulfilled, (state, action) => {
        console.log(action.payload);
        state.categories = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCategories.rejected, handleRejected)
      .addCase(getIngredients.pending, handleRejected)
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getIngredients.rejected, handleRejected)
      .addCase(getGlasses.pending, hanlePending)
      .addCase(getGlasses.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getGlasses.rejected, handleRejected),

  reducers: {
    setSearchQuery: {
      reducer: (state, action) => {
        state.searchQuery = action.payload;
      },

      prepare: (searchQuery) => {
        return { payload: searchQuery };
      },
    },
  },
});

export const filtersReducer = filterSlice.reducer;
