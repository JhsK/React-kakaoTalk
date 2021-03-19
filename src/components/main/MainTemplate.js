import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import FriendList from "./FriendList";
import BgTemplate from "../../lib/styles/BgTemplate";

const MainTemplate = () => {
  return (
    <BgTemplate>
      <Profile />
      <FriendList />
    </BgTemplate>
  );
};

export default MainTemplate;
