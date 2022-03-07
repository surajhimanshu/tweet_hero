import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Article from "./QuickFeedArticle";

const Wrapper = styled.div`
  margin: 18px 0px;
  box-sizing: border-box;
  border-radius: 14px;
  height: fit-content;
  background-color: #192734;
`;

const Heading = styled.h4`
  margin: 0px;
  margin-bottom: 20px;
  padding: 8px 16px;
  letter-spacing: 0.5px;
`;

const ShowMoreButton = styled.div`
  color: rgb(29, 155, 240);
  font-size: 15px;
  cursor: pointer;
  padding: 18px 16px;
  transition-duration: 0.2s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
`;

const QuickFeed = ({ heading, type }) => {
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);
  let { users } = useSelector((state) => state.users);
  users = users.filter((el) => el.id !== user.id);

  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      {type === "posts" ? (
        <>
          <Article data={posts[0]} type={type} />
          <Article data={posts[1]} type={type} />
        </>
      ) : (
        <>
          <Article data={users[0]} type={type} />
          <Article data={users[1]} type={type} />
          <Article data={users[2]} type={type} />
        </>
      )}
      <ShowMoreButton onClick={() => navigate("/explore")}>
        Show more
      </ShowMoreButton>
    </Wrapper>
  );
};

export default QuickFeed;
