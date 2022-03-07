import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { MdOutlineClose } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { css } from "styled-components";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";
import { logUserAPI } from "../Auth/auth.api";
import { useDispatch, useSelector } from "react-redux";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
  `;

const LoginWrapper = styled.div`
  background-color: rgba(91, 112, 131, 0.4);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 700px) {
    max-width: 700px;
  }
`;

const LoginComponent = styled.div`
  box-sizing: border-box;
  padding: 6px;
  background-color: #15202b;
  border-radius: 15px;
  width: 600px;
  height: 650px;
  position: relative;
  @media only screen and (max-width: 700px) {
    height: 100vh;
    width: 100vh;
    border-radius: 0px;
  }
`;

const CloseButton = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  transition-duration: .2s;
  &:hover {
    background-color: rgba(255, 255, 255, .1);
  }
`;

const TwitterIcon = styled.span`
  position: absolute;
  font-size: 31px;
  top: 9px;
  left: 47.7%;
`;

const LoginForm = styled.div`
  position: relative;
  margin: 20px 27px;
  height: 86%;
`;

const Heading = styled.h3`
  margin: 0px;
  margin-bottom: 4px;
  padding: 0px;
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputPlaceHolder = styled.div`
  position: absolute;
  top: ${(props) => (props.value.length > 0 ? "33px" : "43px")};
  left: 10px;
  color: ${(props) =>
    props.value.length > 0 ? "#1d9bf0" : "rgba(255, 255, 255, 0.5)"};
  font-size: ${(props) => (props.value.length > 0 ? "12px" : "17px")};
  transition-duration: 0.2s;
`;

const Input = styled.input`
  margin-top: 27px;
  outline: 1px solid rgba(91, 112, 131, 0.8);
  background: transparent;
  width: 100%;
  border: none;
  border-radius: 3px;
  height: 56px;
  padding-top: 20px;
  padding-left: 8px;
  box-sizing: border-box;
  font-size: 18px;
  color: inherit;
  &:focus {
    outline: 2px solid #1d9bf0;
  }
  &:focus + ${InputPlaceHolder} {
    font-size: 12px;
    top: 33px;
    color: #1d9bf0;
  }
`;

const StyledLink = styled.span`
  font-size: 13px;
  margin-left: 5px;
  color: #1c94e4;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  ${(props) =>
    css`
      font-size: ${props.fontSize}px;
    `}
`;

const LoginButton = styled.button`
  background-color: ${isDisabled}?#82898f:white;
  border: none;
  width: 100%;
  border-radius: 30px;
  height: 44px;
  font-size: 16px;
  position: absolute;
  left: 0px;
  bottom: 70px;
`;

const SignupText = styled.div`
  font-size: 15px;
  position: absolute;
  color: rgb(151, 159, 167);
  bottom: 0px;
`;

const ErrorBlock = styled.div`
  color: cyan;
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.user.isError);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  useEffect(() => {
    setIsDisabled(!(username.length > 0 && password.length > 0));
  }, [username, password]);

  const handleLogin = () => {
    const payload = {
      query: type(username[0]),
      value: username,
      password,
    };
    const loginAction = logUserAPI(payload);
    dispatch(loginAction);
  };

  const type = (val) => {
    if (val >= 0 && val <= 9) {
      return "phoneNo";
    } else if (val === "@") {
      return "userName";
    } else {
      return "email";
    }
  };

  const toSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <GlobalStyle />
      <LoginWrapper>
        <LoginComponent>
          <CloseButton onClick={toSignup}>
            <MdOutlineClose />
          </CloseButton>
          <TwitterIcon>
            <FaTwitter />
          </TwitterIcon>
          <LoginForm>
            <Heading>Enter your details</Heading>

            <InputContainer>
              <Input
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="username"
              />
              <InputPlaceHolder
                onClick={(e) => {
                  e.target.parentNode.querySelector(".username").focus();
                }}
                value={username}
              >
                User name / Email / Phone Number
              </InputPlaceHolder>
            </InputContainer>

            <InputContainer>
              <Input
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="password"
              />
              <InputPlaceHolder
                onClick={(e) => {
                  e.target.parentNode.querySelector(".password").focus();
                }}
                value={password}
              >
                Password
              </InputPlaceHolder>
            </InputContainer>

            <StyledLink fontSize={13}>Forgot password?</StyledLink>

            {isError ? <ErrorBlock>{errorMessage}</ErrorBlock> : <></>}

            <LoginButton disabled={isDisabled} onClick={handleLogin}>
              Log in
            </LoginButton>

            <SignupText>
              Don't have an account?
              <StyledLink fontSize={16} onClick={() => navigate("/signupform")}>
                {" "}
                Sign up
              </StyledLink>
            </SignupText>
          </LoginForm>
        </LoginComponent>
      </LoginWrapper>
    </>
  );
};

export default Login;
