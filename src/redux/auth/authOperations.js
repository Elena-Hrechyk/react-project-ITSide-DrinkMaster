import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://drinkmaster.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (user, thunkAPI) => {
    try {
      const resp = await axios.post('/auth/signup', user);
      console.log(resp.data);
      token.set(resp.data.token);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const signIn = createAsyncThunk(
  'auth/signin',
  async (user, thunkAPI) => {
    try {
      const resp = await axios.post('/auth/signin', user);
      token.set(resp.data.token);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const signOut = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/signout');
    token.unset();
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const currentUser = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (!persistToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const resp = await axios.get('/users/current');
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const updateUserProfile = createAsyncThunk(
  'users/update',
  async (formData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (!persistToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistToken);

    try {
      const resp = await axios.patch('/users/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const subscribe = createAsyncThunk(
  'users/subscribe',
  async ({ email }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (!persistToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistToken);

    try {
      const resp = await axios.post('/users/subscribe', { email });

      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const fetchDrinksFavorite = createAsyncThunk(
  "/drinks/fetchFavorite",
  async (_, thunkAPI) => {

    try {
      const response = await axios.get("/drinks/favorite");
      console.log(response)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  'drinks/deleteFavorite',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/drinks/favorite/remove/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);