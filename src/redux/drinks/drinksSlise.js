import { createSlice } from '@reduxjs/toolkit';
import {
  newDrink,
  getAllDrinks,
  fetchDrinksPopular,
  getDrinkById,
  getSearchDrink,
  fetchOwnDrinks,
  deleteOwnDrinks
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
    ownDrinks: [],
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
        state.popular = action.payload;
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
        state.items = action.payload;
        state.total = action.payload.quantity;
      })
      .addCase(getSearchDrink.rejected, (state) => {
        state.isLoading = false;
        state.items = [];
        state.total = 0;
      })
      .addCase(fetchOwnDrinks.pending, handlePending)
      .addCase(fetchOwnDrinks.rejected, handleRejected)
      .addCase(fetchOwnDrinks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ownDrinks = action.payload;
      })
      .addCase(deleteOwnDrinks.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteOwnDrinks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ownDrinks = state.ownDrinks.filter(item => item.id !== action.payload);
      })
      .addCase(deleteOwnDrinks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // .addCase(fetchDrinksFavorite.pending, handlePending)
    // .addCase(fetchDrinksFavorite.fulfilled, (state, action) => {
    //   console.log('clg', action.payload);
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = action.payload;
    // })
    // .addCase(fetchDrinksFavorite.fulfilled, (state, action) => {
    //   // state.isLoading = false;
    //   // state.error = null;
    //   console.log(state)
    //   state.items = action.payload;
    // })
    //   .addCase(deleteDrinksnewDrink.pending, handlePending)
    //   .addCase(deleteDrinksnewDrink.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     const index = state.items.findIndex(
    //       item => item.id === action.payload.id
    //     );
    //     state.items.splice(index, 1);
    //   })
    //   .addCase(deleteDrinksnewDrink.rejected, handleRejected)
  },
});

export const addDrinksReducer = drinksSlice.reducer;
