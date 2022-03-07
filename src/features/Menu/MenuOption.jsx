import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Styles from "./menu.module.css";
const MenuOption = ({ name, icon, activeIcon }) => {
  let path = name.toLowerCase();
  const { pathname } = useLocation();
  const user = useSelector((state) => state.user.user);
  if (path === "profile") {
    path += "/" + user.userName;
  }
  return (
    <>
      <Link
        to={path}
        className={[
          pathname === "/" + path ? Styles.selected : "",
          Styles.link,
        ].join(" ")}
      >
        <div className={Styles.menuOption}>
          <i>{pathname === "/" + path ? activeIcon : icon}</i>
          &nbsp; &nbsp;
          <span className={Styles.menuOptionName}>{name}</span>
        </div>
      </Link>
    </>
  );
};

export default MenuOption;
