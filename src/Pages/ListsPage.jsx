import React from "react";
import Styles from "../features/Home/home.module.css";
import NewsLetterModal from "../features/NewsLetterModal/NewsLetterModal";

const ListsPage = () => {
  return (
    <>
      <div className={Styles.feed}>
        <NewsLetterModal />
      </div>
    </>
  );
};

export default ListsPage;
