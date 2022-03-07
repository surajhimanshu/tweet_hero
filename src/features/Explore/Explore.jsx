import React from "react";
import { Link, Outlet } from "react-router-dom";

import styles from "./explore.module.css";

const Explore = () => {
  return (
    <div className={styles.explore_wrapper}>
      {/* <div className={styles.searchbar_wrapper}> */}

      {/* <AiOutlineSetting /> */}
      {/* </div> */}

      <div className={styles.explore_section_wrapper}>
        <Link to="">For you</Link>
        <Link to="covid19">COVID-19</Link>
        <Link to="trending">Trending</Link>
        <Link to="news">News</Link>
        <Link to="sports">Sports</Link>
        <Link to="entertainment">Entertainment</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Explore;
