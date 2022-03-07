import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./profile.module.css";
import { GoCalendar } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  getIndividualUserPostsApi,
  getIndividualUserProfileApi,
} from "./profile.api";
// import IndividualUserPost from "./IndividualUserPost";
import Post from "../Feed/Post";
import Styles from "../Home/home.module.css";

const Profile = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.profile.individualUserProfile);
  const posts = useSelector((state) => state.profile.individualUserPosts);

  //for getting individualUserprofile
  useEffect(() => {
    if (params.userName) {
      dispatch(getIndividualUserProfileApi(params.userName));
    }
  }, [params.userName, dispatch]);

  //for getting individualUserPosts
  useEffect(() => {
    if (params.userName) {
      dispatch(getIndividualUserPostsApi(params.userName));
    }
  }, [params.userName, dispatch]);

  if (!profile[0]) return <div></div>;
  return (
    <div className={Styles.feed}>
      <div className={styles.profile_wrapper}>
        <div className={styles.profile_title}>
          <div onClick={() => navigate(`/`)}>
            <BiArrowBack className={styles.backarrow} />
          </div>
          <h3>{profile[0].name}</h3>
        </div>

        <div className={styles.profile_image_container}>
          <div className={styles.back_cover_container}>
            <img src={profile[0].cover} alt={"imge"} />
          </div>
          <div className={styles.profile_image}>
            <img src={profile[0].avatar} alt={"imge"} />
          </div>
        </div>
        <div className={styles.descript_container}>
          <div className={styles.profile_name}>{profile[0].name}</div>
          <div style={{ marginBottom: "20px", color: "grey" }}>
            {profile[0].userName}
          </div>

          <div
            style={{
              fontWeight: "400",
              fontSize: "0.8em",
              marginBottom: "7px",
            }}
          >
          {profile[0].workPlace}
          </div>

          <div className={styles.location_container}>
            <div className={styles.joined}>
              <GoCalendar />
              <p>{profile[0].joined}</p>
            </div>
            &nbsp; &nbsp;
            <div className={styles.joined}>
              <IoLocationOutline />
              <p>{profile[0].location}</p>
            </div>
          </div>

          <div className={styles.follower}>
            <h5>166 </h5> <span className={styles.focolor}>Following </span>
            <h5>50 </h5> <span className={styles.focolor}>Followers </span>
          </div>
        </div>

        <div className={styles.tweets_button_wrapper}>
          <button>Tweets</button>
          <button>Tweets & replies</button>
          <button>Media</button>
          <button>Likes</button>
        </div>

        <div>
          {posts.map((el) => (
            <Post key={el.id} element={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
