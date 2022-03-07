import React from 'react'
import Styles from "../features/Home/home.module.css";
import Bookmark from "../features/Bookmark/Bookmark"

const BookmarkPage = () => {
  return (
    <div className={Styles.feed}>
        <Bookmark />
      </div>
  )
}

export default BookmarkPage