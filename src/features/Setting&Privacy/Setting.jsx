import React from "react";
import style from "./Setting.module.css";
import { FaGreaterThan } from "react-icons/fa";
const Setting = () => {
  let pages = [
    "Your account",
    "Twitter Blue",
    "Security and accouont access",
    "Privacy and safety",
    "Notification",
    "Accessibility,display and languages",
    "Additional resources",
  ];

  return (
    <div>
      {pages.map((element, i) => {
        return (
          <div className={style.component} key={i}>
            <div className={style.text}>{element}</div>
            <div>
              <FaGreaterThan />
            </div>
          </div>
        );
      })}
    </div>
  );
};



export default Setting;

