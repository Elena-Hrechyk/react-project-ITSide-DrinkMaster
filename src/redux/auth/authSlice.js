import { createSlice } from '@reduxjs/toolkit';
import { currentUser, signUp, signIn, signOut, updateUserProfile, subscribe, fetchDrinksFavorite, deleteFavorite } from './authOperations';


const initialState = {
  user: { username: '', birthday: '', email: '', favorite: [], error: null },
  token: null,
  isLogin: false,
  isUpdating: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [signIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [signOut.fulfilled](state) {
      state.user = { username: '', birthday: '', email: '' };
      state.token = null;
      state.isLogin = false;
    },
    [currentUser.pending](state) {
      state.isUpdating = true;
    },
    [currentUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLogin = true;
      state.isUpdating = false;
    },
    [currentUser.rejected](state) {
      state.isUpdating = false;
    },
    [updateUserProfile.pending](state) {
      state.isUpdating = true;
    },
    [updateUserProfile.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLogin = true;
      state.isUpdating = false;
    },
    [updateUserProfile.rejected](state) {
      state.isUpdating = false;
    },
    [subscribe.pending](state) {
      state.isUpdating = true;
    },
    [subscribe.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLogin = true;
      state.isUpdating = false;
    },
    [subscribe.rejected](state) {
      state.isUpdating = false;
    },

    [fetchDrinksFavorite.pending](state) {
      console.log(state)
    },
    [fetchDrinksFavorite.fulfilled] (state, action) {
      console.log('clg', action.payload);
      state.isLoading = false;
      state.error = null;
      // state.items = action.payload;
    },
    // [subscribe.rejected](state) {
    //   state.isUpdating = false;
    // },

    // [deleteFavorite.pending](state) {
    //   console.log(state)
    // },
    [deleteFavorite.fulfilled] (state, action) {
      console.log('clg', action.payload);
      state.user.favorite = state.user.favorite.filter(item => item.id !== action.payload);
      // state.items = action.payload;
    },
    [subscribe.rejected](state, action) {
      state.user.error = action.payload;
    },

  },
});

export const authReducer = authSlice.reducer;

// export default authSlice.reducer;
