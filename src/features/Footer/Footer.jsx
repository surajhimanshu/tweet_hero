import React from "react";
import SearchBar from "../Search/SearchBar";
import Styles from "./footer.module.css";
import QuickFeed from "./QuickFeed";
import Terms from "./Terms";

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footerContent}>
        <SearchBar />
        <QuickFeed heading={"What's happening"} type={"posts"} />
        <QuickFeed heading={"Who to follow"} type={"users"} />
        <Terms />
      </div>
    </div>
  );
};

export default Footer;
