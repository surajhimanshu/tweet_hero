import React from "react";
import Styles from "../features/Home/home.module.css";

const ErrorPage = () => {
  return (
    <>
      <div className={Styles.feed} style={{textAlign: "center", marginTop: "20px"}}>
        <img
          src="https://cemanet.org/wp-content/uploads/2017/03/under-construction-content-will-be-available-soon.jpg"
          alt="Will be available soon"
        />
      </div>
    </>
  );
};

export default ErrorPage;
