import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MdOutlineImage } from "react-icons/md";
import { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { postPostAPI } from "../DataApi/data.api";

const ComposeWrapper = styled.div`
  margin-top: 4px;
  width: 100%;
  height: 107px;
  padding: 0px 16px;
  margin-bottom: 4px;
  display: flex;
  box-sizing: border-box;
  z-index: 1;
  // outline: 1px solid red;
  ${(props) =>
    props.primary &&
    css`
      @media only screen and (max-width: 499px) {
        display: none;
      }
    `}
`;

const AvatarWrapper = styled.div`
  width: 62px;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const InputWrapper = styled.div`
  width: 100%;
  padding: 4px 2px 0px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;
const Input = styled.input`
  background-color: transparent;
  border-radius: 5px;
  width: 100%;
  border: none;
  color: inherit;
  font-size: inherit;
  padding: 17px 2px 16px;
  height: 22px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.7px;
    font-size: 19px;
  }
`;
const MediaInputWrapper = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;
const FileInputButton = styled.button`
  background-color: transparent;
  border: none;
  color: rgb(29, 155, 240);
  padding: 2px;
  cursor: pointer;
  border-radius: 50%;
  transition-duration: 0.2s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const SendTweet = styled.button`
  background-color: rgb(29, 155, 240);
  border: none;
  border-radius: 30px;
  font-weight: bold;
  color: inherit;
  font-size: 15.48px;
  height: 36px;
  width: 76px;
  cursor: pointer;
  transition-duration: 0.2s;
`;
const ImagePreviewWrapper = styled.div`
  width: 100%;
  margin-top: 8px;
  position: relative;
`;
const ImagePreview = styled.img`
  width: 100%;
  border-radius: 20px;
`;
const Close = styled.button`
  position: absolute;
  top: 5px;
  left: 5px;
  border: none;
  background-color: rgba(15, 20, 25, 0.75);
  color: white;
  height: 30px;
  width: 30px;
  font-size: 18px;
  border-radius: 50%;
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    background-color: rgba(39, 44, 48, 0.75);
  }
`;

const TweetBox = ({ visibility }) => {
  const hiddenFileInput = useRef();
  const image = useRef();
  const tweet = useRef();
  const dispatch = useDispatch();
  const [showImage, setShowImage] = useState(false);

  const user = useSelector((state) => state.user.user);

  const sendTweet = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = dd + mm + yyyy;
    const payload = {
      name: user.name,
      avatar: user.avatar,
      username: user.userName,
      tweet: tweet.current.value,
      image: image.current ? "https://source.unsplash.com/random" : "",
      video: "",
      date: today,
      likes: 0,
      retweets: 0,
      comments: [],
      category: "",
      content: "",
    };
    const sendTweetAction = postPostAPI(payload);
    dispatch(sendTweetAction);
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (e) => {
    if (hiddenFileInput.current.value) {
      console.log("show image");
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          image.current.src = reader.result;
        }
      };
      setShowImage(true);
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setShowImage(false);
      console.log("remove image");
    }
  };
  const handleRemove = () => {
    hiddenFileInput.current.value = "";
    handleChange();
  };

  return (
    <ComposeWrapper primary={!visibility}>
      <AvatarWrapper>
        <Avatar src={user.avatar} alt="" />
      </AvatarWrapper>
      <InputWrapper>
        <Input type="text" placeholder="What's happening?" ref={tweet} />
        {showImage ? (
          <ImagePreviewWrapper>
            <ImagePreview ref={image} />
            <Close onClick={handleRemove}>X</Close>
          </ImagePreviewWrapper>
        ) : (
          ""
        )}

        <MediaInputWrapper>
          <FileInputButton onClick={handleClick}>
            <MdOutlineImage style={{ height: "25px", width: "25px" }} />
          </FileInputButton>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <SendTweet onClick={sendTweet}>Tweet</SendTweet>
        </MediaInputWrapper>
      </InputWrapper>
    </ComposeWrapper>
  );
};

export default TweetBox;
