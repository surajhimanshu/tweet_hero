import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ArticleWrapper = styled.div`
  height: fit-content;
  box-sizing: border-box;

  transition-duration: 0.2s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
`;

const Article = styled.div`
  display: flex;
  padding: 10px 16px;
  cursor: pointer;
  justify-content: space-between;
`;

const Tweet = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const Image = styled.img`
  border-radius: 15px;
  min-height: 65px;
  max-height: 65px;
  min-width: 65px;
  max-width: 65px;
`;

const FollowButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 20px;
  height: 33px;
  padding: 0px 15px;
  font-size: 14px;
  font-weight: bold;
  background-color: rgb(239, 243, 244);
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    background-color: rgb(215, 219, 230);
  }
`;

const User = styled.div`
  display: flex;
  gap: 10px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
const UserName = styled.div`
  font-size: 14px;
  color: rgb(136, 153, 166);
  letter-spacing: 0.6px;
`;
const QuickFeedArticle = ({ data, type }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(data ? false : true);
  }, [data]);

  return (
    <>
      {isLoading ? (
        "...Loading"
      ) : (
        <ArticleWrapper>
          {data ? (
            type === "posts" ? (
              <Article
                onClick={() => {
                  navigate("/explore");
                }}
              >
                <Tweet>{data.tweet}</Tweet>
                {data.image ? <Image src={data.image} /> : "..."}
              </Article>
            ) : (
              <Article
                onClick={() => {
                  navigate(`/profile/${data.userName}`);
                }}
              >
                <User>
                  <Avatar src={data.avatar} />
                  <div>
                    <Name>{data.name}</Name>
                    <UserName>{data.userName}</UserName>
                  </div>
                </User>
                <FollowButton>Follow</FollowButton>
              </Article>
            )
          ) : (
            <></>
          )}
        </ArticleWrapper>
      )}
    </>
  );
};

export default QuickFeedArticle;
