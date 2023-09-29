import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { currentUser } from "../auth/authOperations";

axios.defaults.baseURL = "https://drinkmaster.onrender.com/api";

export const newDrink = createAsyncThunk(
    "drinks/newDrink",
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
