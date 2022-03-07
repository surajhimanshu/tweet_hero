import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./menu.module.css";
const More = ({ name, icon }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={Styles.more} onClick={() => navigate("/settings")}>
        <i>{icon}</i>
        &nbsp; &nbsp;
        <span className={Styles.menuOptionName}>Settings</span>
      </div>
    </>
  );
};

export default More;
