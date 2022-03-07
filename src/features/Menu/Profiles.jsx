import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../Auth/auth.slice";
import Styles from "./menu.module.css";

const Profiles = () => {
  const { name, userName, avatar } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={Styles.profiles}
        onClick={() => {
          const logoutAction = logOut();
          dispatch(logoutAction);
        }}
      >
        <img className={Styles.avatar} src={avatar} alt="" />
        <div className={Styles.menuOptionName}>
          <div className={Styles.profileName}>{name}</div>
          <div className={Styles.profileUserName}>{userName}</div>
        </div>
      </div>
    </>
  );
};

export default Profiles;
