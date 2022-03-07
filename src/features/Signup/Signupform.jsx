import React, { useRef, useState } from "react";

import style from "./Signupform.module.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { signupUserAPI } from "../DataApi/data.api";
import { useDispatch } from "react-redux";

const Signupform = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef();
  const userName = useRef();
  const phone = useRef();
  const password = useRef();
  const gender = useRef();
  const month = useRef();
  const date = useRef();
  const yearNumber = useRef();

  //   const [day, setday] = useState(31);
  const [days, setdays] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const [email, setemail] = useState("Email");
  const [Phone, setphone] = useState("Phone");

  let year = new Array(122).fill(1);

  const check = () => {
    if (
      name.current.querySelector("div").querySelector("input").value &&
      userName.current.querySelector("div").querySelector("input").value &&
      phone.current.querySelector("div").querySelector("input").value &&
      month.current.value &&
      date.current.value &&
      yearNumber.current.value &&
      password.current.querySelector("div").querySelector("input").value &&
      gender.current.querySelector("div").querySelector("input").value
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  let Submit = (e) => {
    e.preventDefault();

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = dd + mm + yyyy;

    let payload = {
      name: "",
      userName: "",
      email: "",
      password: "",
      dob: "",
      phoneNo: "",
      gender: "",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
      location: "india",
      joined: today,
      workPlace: "",
      cover:
        "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-dc714.appspot.com/o/image307?alt=media&token=1994361c-92b0-4d94-ba63-a7cbbda79f04",
    };
    let query = {};

    query = {
      name: name.current.querySelector("div").querySelector("input").value,
      userName:
        userName.current.querySelector("div").querySelector("input")
          .value[0] === "@"
          ? userName.current.querySelector("div").querySelector("input").value
          : `@${
              userName.current.querySelector("div").querySelector("input").value
            }`,
    };
    payload = { ...payload, ...query };
    query = {};
    if (
      phone.current.querySelector("div").querySelector("input").value[0] >= 0 &&
      phone.current.querySelector("div").querySelector("input").value[0] <= 9
    ) {
      query.phoneNo = phone.current
        .querySelector("div")
        .querySelector("input").value;
    } else {
      query.email = phone.current
        .querySelector("div")
        .querySelector("input").value;
    }
    payload = { ...payload, ...query };
    query = {};
    let newMonth = "01";
    switch (month.current.value) {
      case "January":
        newMonth = "01";
        break;
      case "February":
        newMonth = "02";
        break;
      case "March":
        newMonth = "03";
        break;
      case "April":
        newMonth = "04";
        break;
      case "May":
        newMonth = "05";
        break;
      case "June":
        newMonth = "06";
        break;
      case "July":
        newMonth = "07";
        break;
      case "August":
        newMonth = "08";
        break;
      case "September":
        newMonth = "09";
        break;
      case "October":
        newMonth = "10";
        break;
      case "November":
        newMonth = "11";
        break;
      case "December":
        newMonth = "12";
        break;
      default:
        newMonth = "01";
        break;
    }
    query = {
      dob: `${date.current.value}${newMonth}${yearNumber.current.value}`,
    };
    payload = { ...payload, ...query };
    query = {
      password: password.current.querySelector("div").querySelector("input")
        .value,
    };
    payload = { ...payload, ...query };
    query = {
      gender: gender.current.querySelector("div").querySelector("input").value,
    };
    payload = { ...payload, ...query };
    query = {};
    const signupAction = signupUserAPI(payload);
    dispatch(signupAction);
    navigate("/login");
  };

  let x = "February";

  let Month = () => {
    let y = 0;
    if (month.current.value === x) {
      y = 29;
    } else if (
      month.current.value === "April" ||
      month.current.value === "June" ||
      month.current.value === "September" ||
      month.current.value === "November"
    ) {
      y = 30;
    } else {
      y = 31;
    }
    setdays(new Array(y).fill(1));
  };

  let ts = () => {
    setphone(email);
    setemail(Phone);
  };
  return (
    <>
      <div className={style.signupWrapper}>
        <div className={style.container}>
          <div className={style.main}>
            <div className={style.close} onClick={() => navigate("/signup")}>
              {" "}
              ✖{" "}
            </div>

            <div className={style.bird}>
              <img
                src="https://icon-library.com/images/twitter-bird-icon-png/twitter-bird-icon-png-23.jpg"
                alt=""
                className={style.bird}
              />
            </div>
            <div></div>
          </div>
          <div className={style.h2}>
            {" "}
            <h2>Create your account</h2>
          </div>

          <form action="" onSubmit={Submit}>
            <div className={style.form}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& > :not(style)": {},
                }}
              >
                <TextField
                  InputLabelProps={{
                    style: { color: "rgba(255, 255, 255, 0.5)" },
                  }}
                  className={style.name}
                  name="name"
                  helperText=""
                  id="demo-helper-text-aligned"
                  label="Name"
                  onChange={check}
                  ref={name}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& > :not(style)": { mt: 1 },
                }}
              >
                <TextField
                  InputLabelProps={{
                    style: { color: "rgba(255, 255, 255, 0.5)" },
                  }}
                  className={style.name}
                  name="username"
                  helperText=""
                  id="demo-helper-text-aligned"
                  label="UserName"
                  onChange={check}
                  ref={userName}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& > :not(style)": { mt: 1 },
                }}
              >
                <TextField
                  InputLabelProps={{
                    style: { color: "rgba(255, 255, 255, 0.5)" },
                  }}
                  className={style.name}
                  name="gender"
                  helperText=""
                  id="demo-helper-text-aligned"
                  label="Gender"
                  onChange={check}
                  ref={gender}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& > :not(style)": { mt: 1 },
                }}
              >
                <TextField
                  InputLabelProps={{
                    style: { color: "rgba(255, 255, 255, 0.5)" },
                  }}
                  className={style.name}
                  name="password"
                  helperText=""
                  id="demo-helper-text-aligned"
                  label="Password"
                  onChange={check}
                  ref={password}
                />
              </Box>

              <Box
                sx={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  "& > :not(style)": { mt: 1, color: "white" },
                }}
              >
                <TextField
                  InputLabelProps={{
                    style: { color: "rgba(255, 255, 255, 0.5)" },
                  }}
                  className={style.name}
                  name={Phone}
                  helperText=""
                  id="demo-helper-text-aligned"
                  label={Phone}
                  onChange={check}
                  ref={phone}
                />
              </Box>

              <div className={style.link} onClick={ts}>
                {" "}
                Use {email} instead
              </div>
              <div className="DOB">
                <strong>Date of birth</strong>

                <div className={style.date}>
                  <div className={style.month}>
                    <div className={style.x}> Month</div>
                    <div className={style.down}>
                      <select
                        name="month"
                        className={style.down}
                        onChange={() => {
                          Month();
                          check();
                        }}
                        ref={month}
                      >
                        <option value=" ">&nbsp;&nbsp;&nbsp;&nbsp;</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                    </div>
                  </div>

                  <div className={style.Day}>
                    <div className={style.x}> Day</div>
                    <div className={style.number}>
                      <select
                        name="Day"
                        className={style.down}
                        ref={date}
                        onChange={check}
                      >
                        {days.map((el, i) => (
                          <option value={i + 1} key={i}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={style.year}>
                    <div className={style.x}>Year</div>
                    <div className={style.yr}>
                      <select
                        name="year"
                        className={style.down}
                        ref={yearNumber}
                        onChange={check}
                      >
                        {year.map((el, i) => (
                          <option value={1901 + i} key={i}>
                            {1901 + i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className={style.button}
                  style={{ backgroundColor: isDisabled ? "#82898f" : "white" }}
                  disabled={isDisabled}
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signupform;
