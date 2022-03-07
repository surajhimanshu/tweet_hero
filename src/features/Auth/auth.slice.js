import { createSlice } from "@reduxjs/toolkit";
// import { loadLocalData, saveLocalData } from "../LocalStorage/localStorage";
import { logUserAPI } from "./auth.api";

const authSlice = createSlice({
  name: "Authenticate",
  initialState: {
    // user: loadLocalData("user") || [],
    user: [],
    isAuth: false,
    // isAuth: (loadLocalData("isAuth") === true ? true : false) || false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    logOut(state) {
      // saveLocalData("user", []);
      // saveLocalData("isAuth", false);
      state.user = [];
      state.isAuth = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(logUserAPI.pending, (state) => {
        state.user = [];
        state.isAuth = false;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(logUserAPI.fulfilled, (state, action) => {
        // saveLocalData("user", action.payload);
        // saveLocalData("isAuth", true);
        state.user = action.payload;
        state.isAuth = true;
        state.isError = false;
        state.errorMessage = "";
      })

      .addCase(logUserAPI.rejected, (state, action) => {
        // saveLocalData("user", []);
        // saveLocalData("isAuth", false);
        state.user = [];
        state.isAuth = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});
export const { logOut } = authSlice.actions;
export default authSlice.reducer;
