import React from "react";
import styles from "./individualuserpost.module.css";
import { IconContext } from "react-icons";
import { FaRetweet, FaComment, FaHeart } from "react-icons/fa";
import { MdOutlineIosShare } from "react-icons/md";

const IndividualUserPost = ({ post }) => {
  let date = [...post.date];
  let s =
    date.slice(0, 2).join("") +
    "/" +
    date.slice(2, 4).join("") +
    "/" +
    date.slice(4).join("");

  return (
    <div className={styles.tweet_container}>
      <div className={styles.image_container}>
        <img src={post.avatar} alt={"img avatae"} />
      </div>

      <div className={styles.content_container}>
        <div className={styles.name_container}>
          <div>{post.name}</div>
          <div>{post.username}</div>
          <div>{s}</div>
        </div>

        <div className={styles.container_tweet}>{post.tweet}</div>

        <div className={styles.tweet_image_container}>
          {post.image === "" ? (
            ""
          ) : (
            <img src={post.image} alt="" className={styles.post} />
          )}

          {post.video === "" ? (
            ""
          ) : (
            <video controls autoPlay muted width="500">
              <source src={post.video} type="video/mp4" />
            </video>
          )}
        </div>
        <IconContext.Provider
          value={{ color: "rgb(83, 100, 113)", size: "17px" }}
        >
          <div className={styles.icon_container}>
            <div>
              <FaComment /> <span>{post.comments.length}</span>
            </div>
            <div>
              <FaRetweet />
              <span>{post.retweets}</span>
            </div>
            <div>
              <FaHeart /> <span>{post.likes}</span>
            </div>
            <div>
              <MdOutlineIosShare />
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default IndividualUserPost;
