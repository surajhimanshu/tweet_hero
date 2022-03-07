import React, { useEffect } from "react";
import Footer from "../features/Footer/Footer";
import Home from "../features/Home/Home";
import Menu from "../features/Menu/Menu";
import Styles from "../features/CSS/homepage.module.css";
import Styles2 from "../features/Home/home.module.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ExplorePage from "./ExplorePage";
import ErrorPage from "./ErrorPage";
import ListsPage from "./ListsPage";
import SettingsPage from "./SettingsPage";
import Profile from "../features/Profile/Profile";
import Accountinfo from "../features/Setting&Privacy/Accountinfo";
import Password from "../features/Setting&Privacy/Password";
import { useDispatch } from "react-redux";
import {
  getBookmarksAPI,
  getPostsAPI,
  getRetweetsAPI,
  getUsersAPI,
} from "../features/DataApi/data.api";
import TweetPage from "./TweetPage";
import BookmarkPage from "./BookmarkPage";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location, location.pathname, navigate]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostsAPI());
    dispatch(getUsersAPI());
    dispatch(getBookmarksAPI());
    dispatch(getRetweetsAPI());
  }, [dispatch]);

  return (
    <div className={Styles.homepage}>
      <Menu />
      <div className={Styles2.feed}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/explore/*" element={<ExplorePage />} />
          <Route path="/lists" element={<ListsPage />} />
          <Route path="/bookmarks" element={<BookmarkPage />} />
          <Route path="/compose/tweet" element={<TweetPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile/:userName" element={<Profile />} />
          <Route path="/account" element={<Accountinfo />} />
          <Route path="/password" element={<Password />} />

          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
