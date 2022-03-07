import { createSlice } from "@reduxjs/toolkit";
import {
  getIndividualUserProfileApi,
  getIndividualUserPostsApi,
  getCategoryPostsApi,
} from "./profile.api";

const initialState = {
  individualUserProfile: {},
  individualUserPosts: [],
  categoryPosts: [],
};

const profileSlice = createSlice({
  name: "PROFILE",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getIndividualUserProfileApi.fulfilled, (state, action) => {
        state.individualUserProfile = action.payload;
      })
      .addCase(getIndividualUserPostsApi.fulfilled, (state, action) => {
        state.individualUserPosts = action.payload;
      })
      .addCase(getCategoryPostsApi.fulfilled, (state, action) => {
        state.categoryPosts = action.payload;
      });
  },
});

export default profileSlice.reducer;
