import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/DataApi/posts.slice";
import usersReducer from "../features/DataApi/users.slice";
import bookmarksReducer from "../features/DataApi/bookmarks.slice";
import retweetsReducer from "../features/DataApi/retweets.slice";
import userReducer from "../features/Auth/auth.slice";
import profileReducer from "../features/Profile/profile.slice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    user: userReducer,
    profile: profileReducer,
    bookmarks: bookmarksReducer,
    retweets: retweetsReducer,
  },
});
