import { createSlice } from "@reduxjs/toolkit";
import { getUsersAPI } from "./data.api";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsersAPI.pending, (state) => {
        state.users = [];
      })
      .addCase(getUsersAPI.fulfilled, (state, action) => {
        state.users = action.payload;
      })

      .addCase(getUsersAPI.rejected, (state) => {
        state.users = [];
      });
  },
});
// export const { getData } = usersSlice.actions;
export default usersSlice.reducer;
