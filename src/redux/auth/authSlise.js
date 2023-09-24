import { createSlice } from '@reduxjs/toolkit';
// import { fetchCurrentUser, signUp, signIn, signOut } from './authOperations';

const initialState = {
  user: { name: null, birthday: null, email: null },
  token: null,
  isLogin: false,
  isUpdating: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // [signUp.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLogin = true;
    // },
    // [signIn.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLogin = true;
    // },
    // [signOut.fulfilled](state, action) {
    //   state.user = { username: null, email: null };
    //   state.token = null;
    //   state.isLogin = false;
    // },
    // [fetchCurrentUser.pending](state) {
    //   state.isUpdating = true;
    // },
    // [fetchCurrentUser.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.isLogin = true;
    //   state.isUpdating = false;
    // },
    // [fetchCurrentUser.rejected](state) {
    //   state.isUpdating = false;
    // },
  },
});

export const authReducer = authSlice.reducer;
