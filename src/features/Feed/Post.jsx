import style from "./feed.module.css";
import { FaRegComment, FaRetweet, FaBookmark } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteBookmarksAPI,
  deleteRetweetsAPI,
  postBookmarksAPI,
  postRetweetsAPI,
  toggleLikeAPI,
} from "../DataApi/data.api";

const Post = ({ element }) => {
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const { retweets } = useSelector((state) => state.retweets);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    setIsLoading(element ? false : true);
  }, [element, setIsLoading]);
  return (
    <>
      {isLoading ? (
        "...Loading"
      ) : (
        <div className={style.main}>
          <div>
            <img src={element.avatar} alt="" className={style.img} />
          </div>

          <div className={style.details}>
            <div className="name">
              <strong> {element.name}</strong> &nbsp;{element.username}
            </div>
            <div className={style.comment}>
              <h3>{element.tweet}</h3>
            </div>
            <div className={style.media}>
              {element.image === "" ? (
                ""
              ) : (
                <img src={element.image} alt="" className={style.post} />
              )}
              {element.video === "" ? (
                ""
              ) : (
                <video controls autoPlay muted width="500">
                  <source src={element.video} type="video/mp4" />
                </video>
              )}
            </div>
            <div className={style.buttons}>
              <div>
                <div className={style.counts}>
                  <FaRegComment /> {}
                </div>
              </div>
              <div>
                <div
                  className={style.counts}
                  onClick={() => {
                    const retweetAction = retweets.find(
                      (ele) => ele.id === element.id
                    )
                      ? deleteRetweetsAPI(element.id)
                      : postRetweetsAPI(element);
                    dispatch(retweetAction);
                  }}
                >
                  <FaRetweet /> {element.retweets}
                </div>
              </div>
              <div
                onClick={() => {
                  const likeAction = toggle
                    ? toggleLikeAPI({
                        id: element.id,
                        obj: element,
                        count: "1",
                      })
                    : toggleLikeAPI({
                        id: element.id,
                        obj: element,
                        count: "-1",
                      });
                  dispatch(likeAction);
                  setToggle((prev) => !prev);
                }}
              >
                <div className={style.counts}>
                  <BsFillHeartFill color={!toggle ? "red" : ""} />{" "}
                  {Number(element.likes + (!toggle ? 1 : 0))}
                </div>
              </div>
              <div
                onClick={() => {
                  const bookmarkAction = bookmarks.find(
                    (ele) => ele.id === element.id
                  )
                    ? deleteBookmarksAPI(element.id)
                    : postBookmarksAPI(element);
                  dispatch(bookmarkAction);
                }}
              >
                <FaBookmark
                  color={
                    bookmarks.find((ele) => ele.id === element.id)
                      ? "black"
                      : "grey"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
