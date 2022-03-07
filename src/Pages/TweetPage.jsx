import React from "react";
import TweetBox from "../features/Home/TweetBox";
import Styles from "../features/Home/home.module.css";

const TweetPage = () => {
  return (
    <div className={Styles.feed} style={{ marginTop: "20px" }}>
      <TweetBox />
    </div>
  );
};

export default TweetPage;
