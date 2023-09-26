import { createSlice } from '@reduxjs/toolkit';
import { newDrink } from './drinksOperations';

const handlePending = state => {
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
  },

  extraReducers: builder => {
    builder
      // .addCase(fetchAllcoctails.pending, handlePending)
      // .addCase(fetchAllcoctails.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.items = action.payload;
      // })
      // .addCase(fetchAllcoctails.rejected, handleRejected)
      .addCase(newDrink.pending, handlePending)
      .addCase(newDrink.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(newDrink.rejected, handleRejected)
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

