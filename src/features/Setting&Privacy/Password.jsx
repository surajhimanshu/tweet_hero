import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import style from "./Password.module.css";
import { HiArrowLeft } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { changeUserPasswordAPI } from "../DataApi/data.api";

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid grey",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#15202B" : "#15202B",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function CustomizedInputs() {
  // let { user } = useSelector((state) => state.user.user);
  const user = {
    id: 1,
    name: "Michael",
    userName: "@Lawson",
    email: "michael.lawson@reqres.in",
    password: "123456",
    dob: "12032000",
    phoneNo: "1231234123",
    gender: "Male",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    location: "Paris",
    joined: "March 2013",
    workPlace: "Shopko Stores Operating Co., LLC",
    cover:
      "https://firebasestorage.googleapis.com/v0/b/fir-react-upload-dc714.appspot.com/o/image307?alt=media&token=1994361c-92b0-4d94-ba63-a7cbbda79f04",
  };
  const dispatch = useDispatch();

  const [newpassword, setNewPassword] = React.useState("");
  const [cofirmpassword, setConfirmPassword] = React.useState("");

  const handleClick =() => {if (newpassword === cofirmpassword) {
    console.log(user);
     const payload = {
         id: user.id,
         obj: user,
         password: newpassword,
     }
     const changePasswordAction = changeUserPasswordAPI(payload)
     dispatch(changePasswordAction)
  }}
  return (
    <div className={style.form}>
      <div className={style.first}>
        <div className={style.heading}>
          <HiArrowLeft className={style.icon} />
          <h4>Change Your Password</h4>
        </div>

        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          <RedditTextField
            label="Current Password"
            type="password"
            defaultValue={user.password}
            id="reddit-input1"
            variant="filled"
            
            style={{ marginTop: 11 }}
          />
        </Box>

        <div className={style.link}>Forgot Password?</div>
      </div>
      <hr />
      <div className={style.first}>
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          <RedditTextField
            label="New Password"
            type="password"
           
            id="reddit-input2"
            variant="filled"
            value={newpassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            style={{ marginTop: 11 }}
          />
        </Box>

        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          <RedditTextField
            label="Confirm Password"
            type="password"
            
            id="reddit-input3"
            variant="filled"
            value={cofirmpassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            style={{ marginTop: 11 }}
          />
        </Box>
      </div>
      <hr />

      <hr />

      <button onClick={handleClick}>Save</button>
    </div>
  );
}
