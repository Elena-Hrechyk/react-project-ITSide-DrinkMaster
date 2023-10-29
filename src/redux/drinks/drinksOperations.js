import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://drinkmaster.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3000/api';

export const newDrink = createAsyncThunk(
  'drinks/newDrink',
  async (newDrink, thunkAPI) => {
    try {
      const response = await axios.post('/drinks/own/add', newDrink, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchDrinksPopular = createAsyncThunk(
  'drinks/popular',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/popular');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getAllDrinks = createAsyncThunk(
  'drinks/getall',
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get('/drinks/mainpage');
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getSearchDrink = createAsyncThunk(
  'drinks/search',
  async ({ searchWord, category, ingredient, limit, page }, thunkAPI) => {
    const urlParams = {
      params: {
        searchWord,
        category,
        ingredient,
        limit,
        page,
      },
    };

    try {
      const resp = await axios.get('/drinks/search', urlParams);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getDrinkById = createAsyncThunk(
  'drinks/drinkId',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.get(`/drinks/${drinkId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchOwnDrinks = createAsyncThunk(
  '/drinks/fetchOwnDrinks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/own/all');
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addFavoriteDrink = createAsyncThunk(
  'drinks/favorite/add',
  async (drink, thunkAPI) => {
    try {
      const response = await axios.post('/drinks/favorite/add', drink);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const removeFavoriteDrink = createAsyncThunk(
  'drinks/favorite/remove',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.delete(`/drinks/favorite/remove/${drinkId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteOwnDrinks = createAsyncThunk(
  '/drinks/deleteOwnDrinks',
  async (id, thunkAPI) => {
    try {
      await axios.delete('/drinks/own/remove/');
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// export const fetchDrinksFavorite = createAsyncThunk(
//   "/auth/fetchFavorite",
//   async (_, thunkAPI) => {
//       try {
//         const response = await axios.get("/auth/favorite");
//         console.log(response.data)
//         return response.data;
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//       }
//     })
