import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://drinkmaster.onrender.com/api';

export const getCategories = createAsyncThunk(
  'filters/getCategories',
  async (data, thunkAPI) => {
    try {
      const response = await axios.get('/filters/categories');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getIngredients = createAsyncThunk(
  'filters/getIngredients',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/filters/ingredients');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getGlasses = createAsyncThunk(
  'filters/getGlasses',
  async (data, thunkAPI) => {
    try {
      const response = await axios.get('/filters/glasses');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
