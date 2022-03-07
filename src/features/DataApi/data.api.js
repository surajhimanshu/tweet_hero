import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  bookmarksUrl,
  postsUrl,
  retweetsUrl,
  usersUrl,
} from "./data.selectors";

export const getPostsAPI = createAsyncThunk("fetchPosts", async () => {
  const response = await axios.get(postsUrl);
  return response.data;
});

export const postPostAPI = createAsyncThunk(
  "postTweet",
  async (payload, thunkAPI) => {
    const response = await axios.post(postsUrl, payload);
    thunkAPI.dispatch(getPostsAPI());
    return response.data;
  }
);

export const getUsersAPI = createAsyncThunk("fetchUsers", async () => {
  const response = await axios.get(usersUrl);
  return response.data;
});

export const signupUserAPI = createAsyncThunk("signupUser", async (payload) => {
  const response = await axios.post(usersUrl, payload);
  return response.data;
});

export const changeUserPasswordAPI = createAsyncThunk(
  "signupUser",
  async ({ id, obj, password }) => {
    const payload = {
      ...obj,
      password: password,
    };
    const response = await axios.put(`${usersUrl}/${id}`, payload);
    return response.data;
  }
);

export const getRetweetsAPI = createAsyncThunk("fetchRetweets", async () => {
  const response = await axios.get(retweetsUrl);
  return response.data;
});

export const postRetweetsAPI = createAsyncThunk(
  "postRetweets",
  async (payload, thunkAPI) => {
    const response = await axios.post(retweetsUrl, payload);
    thunkAPI.dispatch(getRetweetsAPI());
    return response.data;
  }
);

export const deleteRetweetsAPI = createAsyncThunk(
  "deleteRetweets",
  async (payload, thunkAPI) => {
    const response = await axios.delete(`${retweetsUrl}/${payload}`);
    thunkAPI.dispatch(getRetweetsAPI());
    return response.data;
  }
);

export const getBookmarksAPI = createAsyncThunk("fetchBookmarks", async () => {
  const response = await axios.get(bookmarksUrl);
  return response.data;
});

export const postBookmarksAPI = createAsyncThunk(
  "postBookmarks",
  async (payload, thunkAPI) => {
    const response = await axios.post(bookmarksUrl, payload);
    thunkAPI.dispatch(getBookmarksAPI());
    return response.data;
  }
);

export const deleteBookmarksAPI = createAsyncThunk(
  "deleteBookmarks",
  async (payload, thunkAPI) => {
    const response = await axios.delete(`${bookmarksUrl}/${payload}`);
    thunkAPI.dispatch(getBookmarksAPI());
    return response.data;
  }
);

export const toggleLikeAPI = createAsyncThunk(
  "toggleLike",
  async ({ id, obj, count }, thunkAPI) => {
    const payload = {
      ...obj,
      likes: Number(Number(obj.likes) + Number(count)),
    };

    const response = await axios.put(`${postsUrl}/${id}`, payload);
    // thunkAPI.dispatch(getPostsAPI());
    return response.data;
  }
);
