import React from "react";
import style from "./Youraccount.module.css";
import { HiArrowLeft } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa";
import { BsKey } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Youraccount = () => {
 const navigate = useNavigate()
  return (
    <>
    <div className={style.body}>
      <div>
        <div className={style.youraccount}>
          <div className={style.top}>
            <HiArrowLeft />
          </div>
          <div>
            <h3>Your Account</h3>
          </div>
        </div>

        <div className={style.p}>
          <p>
            See information about your account, download an archive of your
            data, or learn about your account deactivation options
          </p>
        </div>
      </div>

     
        <div className={style.part}  onClick={()=>navigate("/account")} >
          <div>
            <IoMdPerson className={style.icon} />
          </div>
          <div className={style.mid}>
            <div>
              <h5>Account information</h5>
              <p className={style.p}>
                See your account information like your phone number and email
                address.
              </p>
            </div>
            <div>
              <FaGreaterThan />
            </div>
          </div>
        </div>

        <div className={style.part}   onClick={()=>navigate("/password")}>
          <div className={style.icon}>
            <BsKey  />
          </div>
          <div className={style.mid}>
            <div>
              <h5>Change your password</h5>
              <p className={style.p}>
               Change your password at any time.
              </p>
            </div>
            <div>
              <FaGreaterThan />
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Youraccount;
