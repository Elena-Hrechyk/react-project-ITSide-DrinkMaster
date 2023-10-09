import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://drinkmaster.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3000/api';

export const getCategories = createAsyncThunk(
  'filters/сategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/filters/categories');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getIngredients = createAsyncThunk(
  'filters/ingredients',
  async (_, thunkAPI) => {
    try {
      const ingredients = [];
      const { data } = await axios.get('/filters/ingredients');
      data.map((item) => {
        ingredients.push(item.title);
      });

      ingredients.sort();
      return ingredients;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getIngredientsAll = createAsyncThunk(
  'filters/ingredientsAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/filters/ingredients');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getGlasses = createAsyncThunk(
  'filters/glasses',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/filters/glasses');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
