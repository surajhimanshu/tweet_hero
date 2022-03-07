import React from "react";
import Styles from "../features/Home/home.module.css";

import Youraccount from "../features/Setting&Privacy/Youraccount";

const SettingsPage = () => {
  return (
    <>
      <div className={Styles.feed}>
        <Youraccount/>
      </div>
    </>
  );
};

export default SettingsPage;
