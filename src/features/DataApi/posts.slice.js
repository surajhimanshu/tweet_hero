import { createSlice } from "@reduxjs/toolkit";
import { getPostsAPI, postPostAPI } from "./data.api";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPostsAPI.pending, (state) => {
        state.posts = [];
      })
      .addCase(getPostsAPI.fulfilled, (state, action) => {
        state.posts = action.payload;
      })

      .addCase(getPostsAPI.rejected, (state) => {
        state.posts = [];
      })

      .addCase(postPostAPI.pending, (state) => {})
      .addCase(postPostAPI.fulfilled, (state) => {})
      .addCase(postPostAPI.rejected, (state) => {});
  },
});
// export const { getData } = postsSlice.actions;
export default postsSlice.reducer;
