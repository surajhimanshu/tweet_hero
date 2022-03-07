import React from "react";
import { useSelector } from "react-redux";
import Feed from "../Feed/Feed";
import Styles from "./home.module.css";
import TweetBox from "./TweetBox";

const Home = () => {
  const { avatar } = useSelector((state) => state.user.user);

  return (
    <div className={Styles.feed}>
      <div className={Styles.placeholder}></div>
      <div className={Styles.homeButton}>
        <img className={Styles.avatar} src={avatar} alt="" />
        &nbsp; &nbsp;
        <span className={Styles.homeText}>Home</span>
      </div>
      <TweetBox visibility={false} />
      <Feed />
    </div>
  );
};

export default Home;
