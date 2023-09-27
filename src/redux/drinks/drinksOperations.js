import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://drinkmaster.onrender.com/api";


export const newDrink = createAsyncThunk(
    "drinks/newDrink",
    async (newDrink, thunkAPI) => {
      try {
        const response = await axios.post("/own/add", newDrink);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );