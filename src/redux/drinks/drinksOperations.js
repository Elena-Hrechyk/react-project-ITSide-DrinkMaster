import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://drinkmaster.onrender.com";


export const newDrink = createAsyncThunk(
    "coctails/newDrink",
    async (newDrink, thunkAPI) => {
      try {
        const response = await axios.post("/drink", newDrink);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );