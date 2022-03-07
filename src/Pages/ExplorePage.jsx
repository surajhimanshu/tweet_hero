import React from "react";
import { Route, Routes } from "react-router-dom";
import ForYou from "../features/Explore/ForYou";
import Explore from "../features/Explore/Explore";
import Covid from "../features/Explore/Covid";
import Trending from "../features/Explore/Trending";
import News from "../features/Explore/News";
import Sports from "../features/Explore/Sports";
import Entertainment from "../features/Explore/Entertainment";
import Styles from "../features/Home/home.module.css";
import SearchBar from "../features/Search/SearchBar";

const ExplorePage = () => {
  return (
    <>
      <div className={Styles.feed}>
        <SearchBar />
        <Explore />
        <Routes>
          <Route path="/" element={<ForYou />} />
          <Route path="/covid19" element={<Covid />} />
          <Route path="trending" element={<Trending />} />
          <Route path="news" element={<News />} />
          <Route path="sports" element={<Sports />} />
          <Route path="entertainment" element={<Entertainment />} />
        </Routes>
      </div>
    </>
  );
};

export default ExplorePage;
