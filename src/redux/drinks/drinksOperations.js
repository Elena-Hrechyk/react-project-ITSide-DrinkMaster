import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { currentUser } from "../auth/authOperations";

axios.defaults.baseURL = 'https://drinkmaster.onrender.com/api';

// axios.defaults.baseURL = 'http://localhost:3000/api';

export const newDrink = createAsyncThunk(
  'drinks/newDrink',
  async (newDrink, thunkAPI) => {
    try {
    //   console.log("newDrink")
    // const userId = currentUser()
    // console.log("userId", userId)
        const response = await axios.post("/drinks/own/add", newDrink);
        console.log("response", response)
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  },
);
  
export const fetchDrinksPopular = createAsyncThunk(
  "drinks/popular",
  async (_, thunkAPI) => {
      try {
        const response = await axios.get("drinks/popular");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
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

// export const fetchDrinksFavorite = createAsyncThunk(
//   "drinks/fetchFavorite",
//   async (_, thunkAPI) => {
//       try {
//         const response = await axios.get("drinks/favorite");
//         return response.data;
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//       }
//     }