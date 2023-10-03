import { createSlice } from '@reduxjs/toolkit';
import {
  currentUser,
  signUp,
  signIn,
  signOut,
  updateUserProfile,
  subscribe,
} from './authOperations';

const initialState = {
  user: { name: '', birthday: '', email: '', avatarURL: '' },
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
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.birthday = action.payload.birthday;
      state.user.avatarURL = action.payload.avatarURL;
      state.token = action.payload.token;
      state.isLogin = true;
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
  },
});

export const authReducer = authSlice.reducer;

// export default authSlice.reducer;
