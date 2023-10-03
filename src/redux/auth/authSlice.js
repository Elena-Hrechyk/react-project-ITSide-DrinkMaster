import { createSlice } from '@reduxjs/toolkit';
import { currentUser, signUp, signIn, signOut, updateUserProfile } from './authOperations';


const initialState = {
  user: { username: '', birthday: '', email: '' },
  token: null,
  isLogin: false,
  isUpdating: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
      state.error = null;
    },
    [signUp.rejected](state, action) {
      state.error = action.payload;
    },

    [signIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
      state.error = null;
    },
    [signIn.rejected](state, action) {
      state.error = action.payload;
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
  },
});

export const authReducer = authSlice.reducer;

// export default authSlice.reducer;
