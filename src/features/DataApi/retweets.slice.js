import { createSlice } from "@reduxjs/toolkit";
import { deleteRetweetsAPI, getRetweetsAPI, postRetweetsAPI } from "./data.api";

const retweetsSlice = createSlice({
  name: "Retweets",
  initialState: {
    retweets: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRetweetsAPI.pending, (state) => {
        state.retweets = [];
      })
      .addCase(getRetweetsAPI.fulfilled, (state, action) => {
        state.retweets = action.payload;
      })

      .addCase(getRetweetsAPI.rejected, (state) => {
        state.retweets = [];
      })

      .addCase(postRetweetsAPI.pending, () => {})
      .addCase(postRetweetsAPI.fulfilled, () => {})
      .addCase(postRetweetsAPI.rejected, () => {})

      .addCase(deleteRetweetsAPI.pending, () => {})
      .addCase(deleteRetweetsAPI.fulfilled, () => {})
      .addCase(deleteRetweetsAPI.rejected, () => {});
  },
});

export default retweetsSlice.reducer;
