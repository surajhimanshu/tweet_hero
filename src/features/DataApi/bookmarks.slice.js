import { createSlice } from "@reduxjs/toolkit";
import {
  deleteBookmarksAPI,
  getBookmarksAPI,
  postBookmarksAPI,
} from "./data.api";

const bookmarksSlice = createSlice({
  name: "Bookmarks",
  initialState: {
    bookmarks: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBookmarksAPI.pending, (state) => {
        state.bookmarks = [];
      })
      .addCase(getBookmarksAPI.fulfilled, (state, action) => {
        state.bookmarks = action.payload;
      })

      .addCase(getBookmarksAPI.rejected, (state) => {
        state.bookmarks = [];
      })

      .addCase(postBookmarksAPI.pending, () => {})
      .addCase(postBookmarksAPI.fulfilled, () => {})
      .addCase(postBookmarksAPI.rejected, () => {})

      .addCase(deleteBookmarksAPI.pending, () => {})
      .addCase(deleteBookmarksAPI.fulfilled, () => {})
      .addCase(deleteBookmarksAPI.rejected, () => {});
  },
});

export default bookmarksSlice.reducer;
