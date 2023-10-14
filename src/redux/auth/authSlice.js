import { createSlice } from '@reduxjs/toolkit';
import {
  currentUser,
  signUp,
  signIn,
  signOut,
  updateUserProfile,
  updateSubscribe,
  fetchDrinksFavorite,
  deleteFavorite,
} from './authOperations';
import {
  addFavoriteDrink,
  removeFavoriteDrink,
} from '../drinks/drinksOperations';

const initialState = {
  user: { name: '', birthday: '', email: '', avatarURL: '' },
  token: null,
  isLogin: false,
  isLoading: false,
  isUpdating: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLogin = true;
      state.error = null;
    },
    [signUp.rejected](state, action) {
      state.error = action.payload;
    },
    [signIn.fulfilled](state, action) {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.birthday = action.payload.birthday;
      state.user.avatarURL = action.payload.avatarURL;
      state.token = action.payload.token;
      state.isLogin = true;
      state.error = null;
    },
    [signIn.rejected](state, action) {
      state.error = action.payload;
    },
    [signOut.fulfilled](state) {
      state.user = { name: '', birthday: '', email: '', avatarURL: '' };
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
    [updateSubscribe.pending](state) {
      state.isUpdating = true;
    },
    [updateSubscribe.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLogin = true;
      state.isUpdating = false;
    },
    [updateSubscribe.rejected](state) {
      state.isUpdating = false;
    },

    [fetchDrinksFavorite.pending](state) {
      state.isLoading = true;
    },
    [fetchDrinksFavorite.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      action.payload ?
        state.user.favorite = action.payload
        : state.user.favorite = [];
    },
    [fetchDrinksFavorite.rejected](state, action) {
      state.error = action.payload
      state.isLoading = false;
    },
    // [subscribe.rejected](state) {
    //   state.isUpdating = false;
    // },

    // [deleteFavorite.pending](state) {
    //   console.log(state)
    // },
    [deleteFavorite.fulfilled](state, action) {
      state.user.favorite = state.user.favorite.filter(
        (item) => item.id !== action.payload,
      );
    },
    [updateSubscribe.rejected](state, action) {
      state.user.error = action.payload;
    },
    [addFavoriteDrink.pending](state) {
      state.isLoading = true;
    },
    [addFavoriteDrink.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user.favorite = action.payload.favorite;
    },
    [addFavoriteDrink.rejected](state, action) {
      state.error = action.payload;
    },
    [removeFavoriteDrink.fulfilled](state, action) {
      state.error = null;
      const index = state.user.favorite.findIndex(drink => drink === action.payload.id);
      state.user.favorite.splice(index, 1);
    },
    [removeFavoriteDrink.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;

// export default authSlice.reducer;
