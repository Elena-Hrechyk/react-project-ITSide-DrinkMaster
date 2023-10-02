import { createSlice } from '@reduxjs/toolkit';
import {
  newDrink,
  getAllDrinks,
  fetchDrinksPopular,
  getDrinkById,
  getSearchDrink,
} from './drinksOperations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    popular: [],
    total: 0,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllDrinks.pending, handlePending)
      .addCase(getAllDrinks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllDrinks.rejected, handleRejected)
      .addCase(newDrink.pending, handlePending)
      .addCase(newDrink.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(newDrink.rejected, handleRejected)
      .addCase(fetchDrinksPopular.rejected, handleRejected)
      .addCase(fetchDrinksPopular.pending, handlePending)
      .addCase(fetchDrinksPopular.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.popular=action.payload;
      })
      .addCase(getDrinkById.fulfilled, (state, action) => {
        state.drinks = [action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getSearchDrink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSearchDrink.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cocktails = action.payload.result;
        state.total = action.payload.totalHits;
      })
      .addCase(getSearchDrink.rejected, (state) => {
        state.isLoading = false;
        state.cocktails = [];
        state.totalCocktails = 0;
      });
  },
});

export const addDrinksReducer = drinksSlice.reducer;
