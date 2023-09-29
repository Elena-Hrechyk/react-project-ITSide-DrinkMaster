import { createSlice } from '@reduxjs/toolkit';
import { newDrink, getAllDrinks, fetchDrinksPopular } from './drinksOperations';

const handlePending = (state) => {
  state.isLoading = true;
  console.log('Hello handlePending');
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  console.log('Hello handleRejected');
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    popular: []
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllDrinks.pending, handlePending)
      .addCase(getAllDrinks.fulfilled, (state, action) => {
        console.log('payload', action.payload);
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllDrinks.rejected, handleRejected)
      .addCase(newDrink.pending, handlePending)
      .addCase(newDrink.fulfilled, (state, action) => {
        console.log('fulfilled');
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(newDrink.rejected, handleRejected)
    .addCase(fetchDrinksPopular.rejected, handleRejected)
      .addCase(fetchDrinksPopular.pending, handlePending)
      .addCase(fetchDrinksPopular.fulfilled,  (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.popular.push(action.payload);
      })
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
