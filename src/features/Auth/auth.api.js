import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { logUserUrl } from "./auth.selectors";

export const logUserAPI = createAsyncThunk(
  "fetchUser",
  async ({ query, value, password }, thunkAPI) => {
    const response = await axios.get(`${logUserUrl}${query}=${value}`);

    if (response.data.length === 0) {
      return thunkAPI.rejectWithValue("Invalid Details");
    } else if (response.data.length > 1) {
      return thunkAPI.rejectWithValue("More than 1 user with same Details");
    } else if (response.data[0].password !== password) {
      return thunkAPI.rejectWithValue("Wrong Details");
    }
    return response.data[0];
  }
);
