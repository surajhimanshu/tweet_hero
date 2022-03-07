import React from "react";
import { Link } from "react-router-dom";
import Styles from "./footer.module.css";

const Terms = () => {
  return (
    <div className={Styles.terms}>
      <div className={Styles.policies}>
        <Link className={Styles.term} to={"home"}>
          Terms of Service
        </Link>
        <Link className={Styles.term} to={"home"}>
          Privacy Policy
        </Link>
        <Link className={Styles.term} to={"home"}>
          Cookie Policy
        </Link>
        <Link className={Styles.term} to={"home"}>
          Accessibility
        </Link>
        <Link className={Styles.term} to={"home"}>
          Ads info
        </Link>
        <Link className={Styles.term} to={"home"}>
          More&hellip;
        </Link>
      </div>
      <div className={Styles.copyright}>&#169; 2022 Twitter, Inc.</div>
    </div>
  );
};

export default Terms;
