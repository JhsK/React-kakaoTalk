import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import FriendList from "./FriendList";

const StyledMainTemplate = styled.div`
  width: 330px;
  height: 520px;
  background: #fff;
  overflow-y: scroll;
`;

const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Profile />
      <FriendList />
    </StyledMainTemplate>
  );
};

export default MainTemplate;
