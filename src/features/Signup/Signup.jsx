import React from "react";
// import pic from "./twitter.jpeg"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import style from "./Signup.module.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.twittersignup}>
        <div className={style.leftchidiya}>
          <img
            src="https://www.bworldonline.com/wp-content/uploads/2021/07/Twitter-640x569.jpg"
            alt=""
          />
        </div>
        <div>
          <div className={style.rightchidiya}>
            <img
              src="https://icon-library.com/images/twitter-bird-icon-png/twitter-bird-icon-png-23.jpg"
              alt=""
            />
            <h1 className={style.happening}>Happening Now</h1>
            <h3 className={style.join}>Join Twitter today.</h3>
            <div className={style.form}>
              <div className={style.sociallogin}>
                <FcGoogle />
                <span className={style.handle}> Sign up with google</span>
              </div>
              <div className={style.sociallogin1}>
                <FaApple />
                <span className={style.handle}> Sign up with apple</span>
              </div>
              <div className={style.or}>
                <div className={style.hr}>
                  <hr />
                </div>
                <div>or</div>

                <div className={style.hr}>
                  <hr />
                </div>
              </div>
              <div
                className={style.sociallogin2}
                onClick={() => navigate("/signupform")}
              >
                Sign up with phone or email
              </div>

              <div className={style.conditions}>
                By signing up, you agree to the <span>Terms of service</span>{" "}
                and <span>Privacy Policy</span>, including{" "}
                <span>Cookie Use.</span>
              </div>

              <div className={style.already}>Already have an account?</div>

              <div className={style.login} onClick={() => navigate("/login")}>
                Sign in
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.links}>
        <a href="/"> Help Center</a>
        <a href="/">About</a>
        <a href="/">Terms of Service</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Cookie Policy</a>
        <a href="/">Accessibility</a>
        <a href="/">Ads info</a>
        <a href="/">Blog</a>
        <a href="/">Status</a>
        <a href="/">Careers</a>
        <a href="/">Brand Resources</a>
        <a href="/">Advertising</a>
        <a href="/">Marketing</a>
        <a href="/">Twitter for Business</a>
        <a href="/">Developers</a>
        <a href="/">Directory</a>
        <a href="/">Settings</a>
        &copy; 2022 Twitter, Inc.
      </div>
    </>
  );
};

export default Signup;
