import React from "react";
import styles from "./newslettermodal.module.css";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const NewsLetterModal = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal_content}>
        <div onClick={() => navigate("/")} className={styles.close}>
          <IoMdClose />
        </div>

        <div className={styles.modal_header}>
          <img
            src="https://abs.twimg.com/responsive-web/client-web/logo_revue.31c21585.svg"
            alt="img from twitter"
          />
        </div>

        <div className={styles.modal_title}>
          <h3>Start a newsletter for free</h3>
        </div>

        <div className={styles.modal_content_para}>
          Looking for other ways to reach your audience? Ready to get paid for
          your work? It's time to try out <span>@Revue</span> - Twitter's
          newsletter tool for writers and publishers
        </div>
        <div className={styles.modal_bullet}>
          <ul>
            <li>Compose and schedule newsletters</li>
            <li>Embed Tweets</li>
            <li>Import email lists</li>
            <li>Analyze engagement</li>
            <li>Earn money from paid subscribers</li>
          </ul>
        </div>

        <div className={styles.modal_button}>
          <button onClick={() => navigate("/explore")}>Find out more</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterModal;
