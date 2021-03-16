import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Profile from "./Profile";

const StyledMainTemplate = styled.div`
  width: 330px;
  height: 520px;
  background: #fff;
`;

const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Profile />
    </StyledMainTemplate>
  );
};

export default MainTemplate;
